import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { CategoryTypeEnum } from './dto/create-category.dto';
import { ValidateCategoryTypePipe } from './pipes/validate-category-type.pipe';
import { CategoryModel, DeleteCategoryResponseModel } from './models/category.model';

@ApiTags('categories')
@ApiBearerAuth('JWT-auth')
@ApiUnauthorizedResponse({ description: 'Unauthorized - JWT token is missing or invalid' })
@UseGuards(JwtGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}

  /**
   * Get all categories for the authenticated user
   * Optionally filter by type (income/expense)
   * 
   * @param userId - Current authenticated user ID
   * @param type - Optional filter for category type
   * @returns Array of categories
   */
  @Get()
  @ApiOperation({
    summary: 'Get all categories',
    description: 'Retrieves all categories for the current user with optional type filtering',
  })
  @ApiQuery({
    name: 'type',
    required: false,
    enum: CategoryTypeEnum,
    description: 'Filter categories by type',
  })
  @ApiOkResponse({
    description: 'List of categories retrieved successfully',
    type: [CategoryModel],
  })
  getCategories(
    @GetUser('id') userId: string,
    @Query('type', ValidateCategoryTypePipe) type?: CategoryTypeEnum,
  ) {
    return this.categoryService.getCategories(userId, type);
  }

  /**
   * Create a new category
   * 
   * @param userId - Current authenticated user ID
   * @param dto - Category creation data
   * @returns The created category
   */
  @Post()
  @ApiOperation({
    summary: 'Create a new category',
    description: 'Creates a new custom category for the current user',
  })
  @ApiCreatedResponse({
    description: 'The category has been successfully created',
    type: CategoryModel,
  })
  createCategory(
    @GetUser('id') userId: string,
    @Body() dto: CreateCategoryDto,
  ) {
    return this.categoryService.createCategory(userId, dto);
  }

  /**
   * Update an existing category
   * 
   * @param userId - Current authenticated user ID
   * @param categoryId - ID of the category to update
   * @param dto - Category update data
   * @returns The updated category
   */
  @Put(':id')
  @ApiOperation({
    summary: 'Update a category',
    description: 'Updates an existing custom category by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Category ID',
  })
  @ApiOkResponse({
    description: 'The category has been successfully updated',
    type: CategoryModel,
  })
  @ApiForbiddenResponse({ 
    description: 'Forbidden - User does not own this category or it is a default category' 
  })
  @ApiNotFoundResponse({ description: 'Not Found - Category with the given ID does not exist' })
  updateCategory(
    @GetUser('id') userId: string,
    @Param('id') categoryId: string,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(userId, categoryId, dto);
  }

  /**
   * Delete a category
   * 
   * @param userId - Current authenticated user ID
   * @param categoryId - ID of the category to delete
   * @returns Success message
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a category',
    description: 'Deletes a custom category by ID. Cannot delete default categories or categories used in transactions/bills.',
  })
  @ApiParam({
    name: 'id',
    description: 'Category ID',
  })
  @ApiNoContentResponse({
    description: 'The category has been successfully deleted',
  })
  @ApiForbiddenResponse({ 
    description: 'Forbidden - User does not own this category, it is a default category, or it is in use' 
  })
  @ApiNotFoundResponse({ description: 'Not Found - Category with the given ID does not exist' })
  deleteCategory(
    @GetUser('id') userId: string,
    @Param('id') categoryId: string,
  ) {
    return this.categoryService.deleteCategory(userId, categoryId);
  }
}
