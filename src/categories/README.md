# Categories API

The Categories API allows users to create, organize, and manage custom categories for classifying their transactions and bills.

## Features

- View categories with optional type filtering
- Create custom categories with names, icons, and colors
- Update existing custom categories
- Delete custom categories (with protection for categories in use)
- System defaults that can't be modified or deleted

## Endpoints

### Get All Categories

```
GET /api/categories
```

Optional query parameters:
- `type`: Filter categories by type ('INCOME' or 'EXPENSE')

Returns an array of categories belonging to the authenticated user.

### Create a Category

```
POST /api/categories
```

Request body:
```json
{
  "name": "Groceries",
  "type": "EXPENSE",
  "icon": "shopping-cart",
  "color": "#4CAF50",
  "description": "For food and household items"
}
```

Required fields:
- `name`: Category name (string)
- `type`: Category type (INCOME or EXPENSE) 
- `icon`: Icon identifier (string)
- `color`: Color code in hex format (string)

Optional fields:
- `description`: Additional details (string)

Returns the created category.

### Update a Category

```
PUT /api/categories/:id
```

Request body:
```json
{
  "name": "Groceries & Supplies",
  "color": "#2E7D32",
  "icon": "shopping-basket"
}
```

All fields are optional - only include the fields you want to update.

Returns the updated category.

### Delete a Category

```
DELETE /api/categories/:id
```

Returns a 204 No Content status on success.

## Business Rules

- Users can only access their own categories
- Default/system categories cannot be modified or deleted
- Categories that are in use by transactions or bills cannot be deleted
- When listing categories, results are ordered alphabetically by name

## Data Model

### Category

```typescript
{
  id: string;
  userId: string;
  name: string;
  type: "INCOME" | "EXPENSE";
  icon: string;
  color: string;
  isDefault: boolean;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- 400 Bad Request: Invalid input data
- 401 Unauthorized: Authentication required
- 403 Forbidden: Access denied, default category, or category in use
- 404 Not Found: Category not found
- 500 Internal Server Error: Server-side issues

## Authentication

All endpoints require authentication using JWT. The token should be provided in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN
``` 