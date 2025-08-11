import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { CategoryTypeEnum } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  // Get all categories for a user with optional type filter
  async getCategories(userId: string, type?: CategoryTypeEnum) {
    const whereClause: any = { userId };
    
    if (type) {
      whereClause.type = type;
    }

    const categories = await this.prisma.category.findMany({
      where: whereClause,
      orderBy: { name: 'asc' },
    });

    return categories;
  }

  // Create a new category
  async createCategory(userId: string, dto: CreateCategoryDto) {
    try {
      const category = await this.prisma.category.create({
        data: {
          userId,
          name: dto.name,
          type: dto.type,
          icon: dto.icon,
          color: dto.color,
          description: dto.description,
          isDefault: false,
        },
      });

      return category;
    } catch (error) {
      throw error;
    }
  }

  // Update an existing category
  async updateCategory(userId: string, categoryId: string, dto: UpdateCategoryDto) {
    // Check if category exists and belongs to the user
    const category = await this.verifyOwnership(userId, categoryId);

    // Prevent editing system/default categories
    if (category.isDefault) {
      throw new ForbiddenException('Default categories cannot be edited');
    }

    // Update the category
    const updatedCategory = await this.prisma.category.update({
      where: { id: categoryId },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.type && { type: dto.type }),
        ...(dto.icon && { icon: dto.icon }),
        ...(dto.color && { color: dto.color }),
        ...(dto.description !== undefined && { description: dto.description }),
      },
    });

    return updatedCategory;
  }

  // Delete a category
  async deleteCategory(userId: string, categoryId: string) {
    // Check if category exists and belongs to the user
    const category = await this.verifyOwnership(userId, categoryId);

    // Prevent deleting system/default categories
    if (category.isDefault) {
      throw new ForbiddenException('Default categories cannot be deleted');
    }

    // Check if the category is being used in transactions or bills
    const transactionCount = await this.prisma.transaction.count({
      where: { categoryId },
    });

    const billCount = await this.prisma.bill.count({
      where: { categoryId },
    });

    if (transactionCount > 0 || billCount > 0) {
      throw new ForbiddenException(
        'Cannot delete a category that is used in transactions or bills. ' +
        'Please reassign those items to a different category first.'
      );
    }

    // Delete the category
    await this.prisma.category.delete({
      where: { id: categoryId },
    });

    return { message: 'Category deleted successfully' };
  }

  // Helper method to verify ownership
  private async verifyOwnership(userId: string, categoryId: string) {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    if (category.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    return category;
  }
}
