import { PrismaClient } from '../generated/prisma';
import * as argon2 from 'argon2';
import { 
  addDays, 
  addMonths, 
  format, 
  getDate, 
  getDaysInMonth, 
  getMonth, 
  getYear, 
  setDate, 
  subMonths 
} from 'date-fns';

const prisma = new PrismaClient();

// Enum definitions based on schema
enum CategoryType {
  EXPENSE = 'EXPENSE',
  INCOME = 'INCOME'
}

enum TransactionType {
  EXPENSE = 'EXPENSE',
  INCOME = 'INCOME'
}

enum BudgetTimeframe {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY'
}

enum BillFrequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  BIANNUALLY = 'BIANNUALLY',
  ANNUALLY = 'ANNUALLY'
}

async function main() {
  console.log('Seeding started...');

  // Create test user
  const password = await argon2.hash('password123');
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      password,
      firstName: 'Test',
      lastName: 'User',
    },
  });

  console.log(`Created user: ${user.email}`);

  // Create categories
  const expenseCategories = [
    { name: 'Housing', color: '#4B89DC', icon: 'home', type: CategoryType.EXPENSE },
    { name: 'Utilities', color: '#5D9CEC', icon: 'flash', type: CategoryType.EXPENSE },
    { name: 'Groceries', color: '#48CFAD', icon: 'cart', type: CategoryType.EXPENSE },
    { name: 'Dining Out', color: '#A0D468', icon: 'restaurant', type: CategoryType.EXPENSE },
    { name: 'Transportation', color: '#FFCE54', icon: 'car', type: CategoryType.EXPENSE },
    { name: 'Entertainment', color: '#FC6E51', icon: 'film', type: CategoryType.EXPENSE },
    { name: 'Healthcare', color: '#ED5565', icon: 'medkit', type: CategoryType.EXPENSE },
    { name: 'Shopping', color: '#EC87C0', icon: 'bag', type: CategoryType.EXPENSE },
    { name: 'Personal Care', color: '#AC92EC', icon: 'person', type: CategoryType.EXPENSE },
    { name: 'Education', color: '#967ADC', icon: 'school', type: CategoryType.EXPENSE },
  ];

  const incomeCategories = [
    { name: 'Salary', color: '#3BAFDA', icon: 'cash', type: CategoryType.INCOME },
    { name: 'Freelance', color: '#4FC1E9', icon: 'laptop', type: CategoryType.INCOME },
    { name: 'Investments', color: '#37BC9B', icon: 'trending-up', type: CategoryType.INCOME },
    { name: 'Gifts', color: '#D770AD', icon: 'gift', type: CategoryType.INCOME },
  ];

  const categories = [...expenseCategories, ...incomeCategories];
  const categoryMap = new Map();

  for (const category of categories) {
    try {
      // Use create instead of upsert since this is for testing
      const savedCategory = await prisma.category.create({
        data: {
          name: category.name,
          color: category.color,
          icon: category.icon,
          type: category.type as any,
          userId: user.id,
        },
      });

      categoryMap.set(category.name, savedCategory);
    } catch (e) {
      console.error(`Failed to create category ${category.name}:`, e);
    }
  }

  console.log(`Created ${categoryMap.size} categories`);

  // Create budgets for the last 3 months
  const currentDate = new Date();
  const budgets: any[] = [];

  for (let i = 0; i < 3; i++) {
    const budgetMonth = subMonths(currentDate, i);
    const startDate = new Date(getYear(budgetMonth), getMonth(budgetMonth), 1);
    const endDate = new Date(getYear(budgetMonth), getMonth(budgetMonth) + 1, 0);
    
    const budget = await prisma.budget.create({
      data: {
        name: `Budget for ${format(startDate, 'MMMM yyyy')}`,
        amount: 5000,
        startDate,
        endDate,
        type: BudgetTimeframe.MONTHLY as any,
        userId: user.id,
      },
    });
    
    budgets.push(budget);
    
    // Create category allocations for this budget
    const expensePromises: Promise<any>[] = [];
    
    expenseCategories.forEach(cat => {
      const category = categoryMap.get(cat.name);
      if (category) {
        // Allocate different amounts to different categories
        let amount = 0;
        
        switch(cat.name) {
          case 'Housing':
            amount = 1500;
            break;
          case 'Utilities':
            amount = 300;
            break;
          case 'Groceries':
            amount = 600;
            break;
          case 'Dining Out':
            amount = 300;
            break;
          case 'Transportation':
            amount = 200;
            break;
          case 'Entertainment':
            amount = 200;
            break;
          case 'Healthcare':
            amount = 150;
            break;
          case 'Shopping':
            amount = 250;
            break;
          case 'Personal Care':
            amount = 100;
            break;
          case 'Education':
            amount = 100;
            break;
          default:
            amount = 100;
        }
        
        expensePromises.push(
          prisma.categoryAllocation.create({
            data: {
              amount,
              budgetId: budget.id,
              categoryId: category.id,
            },
          })
        );
      }
    });
    
    await Promise.all(expensePromises);
  }

  console.log(`Created ${budgets.length} budgets with category allocations`);

  // Create transactions for the last 3 months
  // Income transactions (salary on 1st of each month)
  const incomeCategory = categoryMap.get('Salary');
  
  const incomeTransactions: Promise<any>[] = [];
  
  for (let i = 0; i < 3; i++) {
    const transactionMonth = subMonths(currentDate, i);
    const transactionDate = setDate(transactionMonth, 1); // 1st of the month
    
    if (incomeCategory) {
      incomeTransactions.push(
        prisma.transaction.create({
          data: {
            amount: 5000,
            description: 'Monthly Salary',
            date: transactionDate,
            type: TransactionType.INCOME as any,
            userId: user.id,
            categoryId: incomeCategory.id,
          },
        })
      );
    }
  }
  
  await Promise.all(incomeTransactions);
  console.log('Created income transactions');

  // Generate random expenses for each day over the last 3 months
  const startDate = subMonths(currentDate, 3);
  let currentDay = new Date(startDate);
  const expenseTransactions: Promise<any>[] = [];
  
  while (currentDay <= currentDate) {
    // Skip some days to make data more realistic (70% chance of having transactions)
    if (Math.random() < 0.7) {
      // Number of transactions for this day (1-3)
      const transactionsCount = Math.floor(Math.random() * 3) + 1;
      
      for (let i = 0; i < transactionsCount; i++) {
        // Get random expense category
        const expenseCategoryKeys = [...categoryMap.keys()].filter(
          key => categoryMap.get(key).type === CategoryType.EXPENSE
        );
        const randomCategoryName = expenseCategoryKeys[
          Math.floor(Math.random() * expenseCategoryKeys.length)
        ];
        const category = categoryMap.get(randomCategoryName);
        
        if (category) {
          // Random amount between $5 and $200
          const amount = Math.round((Math.random() * 195 + 5) * 100) / 100;
          
          // Create description based on category
          let description = `${category.name} expense`;
          switch(category.name) {
            case 'Groceries':
              description = ['Supermarket', 'Grocery store', 'Food shopping'][Math.floor(Math.random() * 3)];
              break;
            case 'Dining Out':
              description = ['Restaurant', 'Cafe', 'Fast food', 'Takeout'][Math.floor(Math.random() * 4)];
              break;
            case 'Transportation':
              description = ['Gas', 'Public transport', 'Taxi', 'Ride sharing'][Math.floor(Math.random() * 4)];
              break;
            case 'Entertainment':
              description = ['Movies', 'Concert', 'Streaming service', 'Subscription'][Math.floor(Math.random() * 4)];
              break;
            case 'Shopping':
              description = ['Clothing', 'Electronics', 'Online purchase', 'Department store'][Math.floor(Math.random() * 4)];
              break;
          }
          
          expenseTransactions.push(
            prisma.transaction.create({
              data: {
                amount,
                description,
                date: new Date(currentDay),
                type: TransactionType.EXPENSE as any,
                userId: user.id,
                categoryId: category.id,
              },
            })
          );
        }
      }
    }
    
    // Move to next day
    currentDay = addDays(currentDay, 1);
  }
  
  // Execute all expense transactions
  await Promise.all(expenseTransactions);
  console.log('Created expense transactions');

  // Create bills
  const bills = [
    {
      name: 'Rent',
      amount: 1500,
      dueDate: setDate(currentDate, 1), // 1st of the month
      frequency: BillFrequency.MONTHLY,
      categoryName: 'Housing'
    },
    {
      name: 'Electricity',
      amount: 120,
      dueDate: setDate(currentDate, 15), // 15th of the month
      frequency: BillFrequency.MONTHLY,
      categoryName: 'Utilities'
    },
    {
      name: 'Internet',
      amount: 80,
      dueDate: setDate(currentDate, 20), // 20th of the month
      frequency: BillFrequency.MONTHLY,
      categoryName: 'Utilities'
    },
    {
      name: 'Phone',
      amount: 60,
      dueDate: setDate(currentDate, 25), // 25th of the month
      frequency: BillFrequency.MONTHLY,
      categoryName: 'Utilities'
    },
    {
      name: 'Gym Membership',
      amount: 50,
      dueDate: setDate(currentDate, 5), // 5th of the month
      frequency: BillFrequency.MONTHLY,
      categoryName: 'Personal Care'
    },
    {
      name: 'Streaming Services',
      amount: 30,
      dueDate: setDate(currentDate, 10), // 10th of the month
      frequency: BillFrequency.MONTHLY,
      categoryName: 'Entertainment'
    }
  ];

  for (const bill of bills) {
    const category = categoryMap.get(bill.categoryName);
    if (category) {
      await prisma.bill.create({
        data: {
          name: bill.name,
          amount: bill.amount,
          dueDate: bill.dueDate,
          frequency: bill.frequency as any,
          userId: user.id,
          categoryId: category.id,
        },
      });
    }
  }

  console.log('Created bills');

  // Create savings goals
  const savingsGoals = [
    {
      name: 'Emergency Fund',
      targetAmount: 10000,
      currentAmount: 5000,
      targetDate: addMonths(currentDate, 12),
    },
    {
      name: 'Vacation',
      targetAmount: 3000,
      currentAmount: 1200,
      targetDate: addMonths(currentDate, 6),
    },
    {
      name: 'New Laptop',
      targetAmount: 1500,
      currentAmount: 700,
      targetDate: addMonths(currentDate, 3),
    },
    {
      name: 'Down Payment',
      targetAmount: 50000,
      currentAmount: 15000,
      targetDate: addMonths(currentDate, 24),
    }
  ];

  for (const goal of savingsGoals) {
    await prisma.savingsGoal.create({
      data: {
        name: goal.name,
        targetAmount: goal.targetAmount,
        currentAmount: goal.currentAmount,
        targetDate: goal.targetDate,
        userId: user.id,
      },
    });
  }

  console.log('Created savings goals');

  // Create plan items
  const planItems = [
    {
      description: 'Monthly savings contribution',
      amount: 500,
      planType: 'MONTHLY',
      itemType: 'SAVINGS',
    },
    {
      description: 'Unexpected expenses',
      amount: 200,
      planType: 'MONTHLY',
      itemType: 'EXPENSE',
      categoryName: 'Shopping'
    },
    {
      description: 'Side project income',
      amount: 300,
      planType: 'MONTHLY',
      itemType: 'INCOME',
      categoryName: 'Freelance'
    }
  ];

  for (const item of planItems) {
    const category = item.categoryName ? categoryMap.get(item.categoryName) : null;
    
    await prisma.planItem.create({
      data: {
        description: item.description,
        amount: item.amount,
        planType: item.planType,
        itemType: item.itemType,
        userId: user.id,
        categoryId: category?.id || null,
      },
    });
  }

  console.log('Created plan items');
  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 