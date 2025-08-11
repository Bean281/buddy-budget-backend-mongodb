import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto, TransactionTypeEnum } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionModel } from './models/transaction.model';
import { ParseDatePipe } from './pipes/parse-date.pipe';
import { TransactionStatsModel } from './models/transaction-stats.model';

@ApiTags('transactions')
@ApiBearerAuth('JWT-auth')
@ApiUnauthorizedResponse({ description: 'Unauthorized - JWT token is missing or invalid' })
@UseGuards(JwtGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  /**
   * Get all transactions for the authenticated user
   * With optional filtering by date range, type, and category
   * 
   * @param userId - Current authenticated user ID
   * @param fromDate - Optional start date for filtering
   * @param toDate - Optional end date for filtering
   * @param type - Optional transaction type filter
   * @param categoryId - Optional category filter
   * @returns Array of transactions
   */
  @Get()
  @ApiOperation({
    summary: 'Get all transactions',
    description: 'Retrieves all transactions for the current user with optional filtering',
  })
  @ApiQuery({
    name: 'fromDate',
    required: false,
    type: String,
    description: 'Start date for filtering (ISO format)',
  })
  @ApiQuery({
    name: 'toDate',
    required: false,
    type: String,
    description: 'End date for filtering (ISO format)',
  })
  @ApiQuery({
    name: 'type',
    required: false,
    enum: TransactionTypeEnum,
    description: 'Filter transactions by type',
  })
  @ApiQuery({
    name: 'categoryId',
    required: false,
    type: String,
    description: 'Filter transactions by category ID',
  })
  @ApiOkResponse({
    description: 'List of transactions retrieved successfully',
    type: [TransactionModel],
  })
  getTransactions(
    @GetUser('id') userId: string,
    @Query('fromDate', ParseDatePipe) fromDate?: Date,
    @Query('toDate', ParseDatePipe) toDate?: Date,
    @Query('type') type?: TransactionTypeEnum,
    @Query('categoryId') categoryId?: string,
  ) {
    return this.transactionService.getTransactions(userId, fromDate, toDate, type, categoryId);
  }

  /**
   * Get a transaction by ID
   * 
   * @param userId - Current authenticated user ID
   * @param transactionId - ID of the transaction to retrieve
   * @returns The requested transaction
   */
  @Get(':id')
  @ApiOperation({
    summary: 'Get a transaction by ID',
    description: 'Retrieves a specific transaction by its ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Transaction ID',
  })
  @ApiOkResponse({
    description: 'Transaction retrieved successfully',
    type: TransactionModel,
  })
  @ApiNotFoundResponse({ description: 'Not Found - Transaction with the given ID does not exist' })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this transaction' })
  getTransactionById(
    @GetUser('id') userId: string,
    @Param('id') transactionId: string,
  ) {
    return this.transactionService.getTransactionById(userId, transactionId);
  }

  /**
   * Create a new transaction
   * 
   * @param userId - Current authenticated user ID
   * @param dto - Transaction creation data
   * @returns The created transaction
   */
  @Post()
  @ApiOperation({
    summary: 'Create a new transaction',
    description: 'Creates a new transaction for the current user',
  })
  @ApiCreatedResponse({
    description: 'The transaction has been successfully created',
    type: TransactionModel,
  })
  createTransaction(
    @GetUser('id') userId: string,
    @Body() dto: CreateTransactionDto,
  ) {
    return this.transactionService.createTransaction(userId, dto);
  }

  /**
   * Update an existing transaction
   * 
   * @param userId - Current authenticated user ID
   * @param transactionId - ID of the transaction to update
   * @param dto - Transaction update data
   * @returns The updated transaction
   */
  @Put(':id')
  @ApiOperation({
    summary: 'Update a transaction',
    description: 'Updates an existing transaction by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Transaction ID',
  })
  @ApiOkResponse({
    description: 'The transaction has been successfully updated',
    type: TransactionModel,
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this transaction' })
  @ApiNotFoundResponse({ description: 'Not Found - Transaction with the given ID does not exist' })
  updateTransaction(
    @GetUser('id') userId: string,
    @Param('id') transactionId: string,
    @Body() dto: UpdateTransactionDto,
  ) {
    return this.transactionService.updateTransaction(userId, transactionId, dto);
  }

  /**
   * Delete a transaction
   * 
   * @param userId - Current authenticated user ID
   * @param transactionId - ID of the transaction to delete
   * @returns Success message
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a transaction',
    description: 'Deletes a transaction by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Transaction ID',
  })
  @ApiNoContentResponse({
    description: 'The transaction has been successfully deleted',
  })
  @ApiForbiddenResponse({ description: 'Forbidden - User does not own this transaction' })
  @ApiNotFoundResponse({ description: 'Not Found - Transaction with the given ID does not exist' })
  deleteTransaction(
    @GetUser('id') userId: string,
    @Param('id') transactionId: string,
  ) {
    return this.transactionService.deleteTransaction(userId, transactionId);
  }

  /**
   * Get transaction summary statistics
   * 
   * @param userId - Current authenticated user ID
   * @param fromDate - Optional start date for filtering
   * @param toDate - Optional end date for filtering
   * @returns Transaction summary statistics
   */
  @Get('stats/summary')
  @ApiOperation({
    summary: 'Get transaction summary statistics',
    description: 'Retrieves summary statistics for transactions within a date range',
  })
  @ApiQuery({
    name: 'fromDate',
    required: false,
    type: String,
    description: 'Start date for statistics (ISO format)',
  })
  @ApiQuery({
    name: 'toDate',
    required: false,
    type: String,
    description: 'End date for statistics (ISO format)',
  })
  @ApiOkResponse({
    description: 'Transaction statistics retrieved successfully',
    type: TransactionStatsModel,
  })
  getTransactionStats(
    @GetUser('id') userId: string,
    @Query('fromDate', ParseDatePipe) fromDate?: Date,
    @Query('toDate', ParseDatePipe) toDate?: Date,
  ) {
    return this.transactionService.getTransactionStats(userId, fromDate, toDate);
  }
}
