# Budget Management API Documentation

This document provides a comprehensive guide to the Budget Management API. The API follows REST principles and uses JWT for authentication.

## Base URL

```
http://localhost:3333
```

## Swagger Documentation

Interactive API documentation is available at:

```
http://localhost:3333/api-docs
```

The Swagger documentation provides:
- All available endpoints
- Required parameters
- Request/response schemas
- Examples
- Authentication information

## Authentication

The API uses JWT (JSON Web Token) for authentication. All protected endpoints require a valid Bearer token.

### Authentication Flow

1. Register a new user account
2. Login to receive a JWT token
3. Use the token in subsequent requests

### Token Usage

Include the JWT token in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Available Endpoints

### Authentication API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/register | Register a new user |
| POST | /auth/login | Login and receive token |
| POST | /auth/forgot-password | Request password reset |
| POST | /auth/reset-password | Reset password with token |

#### Authentication Examples

**Register a new user:**

```json
// POST /auth/register
{
  "email": "user@example.com",
  "password": "Password123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**User login:**

```json
// POST /auth/login
{
  "email": "user@example.com",
  "password": "Password123!"
}
```

**Forgot password:**

```json
// POST /auth/forgot-password
{
  "email": "user@example.com"
}
```

**Reset password:**

```json
// POST /auth/reset-password
{
  "email": "user@example.com",
  "token": "a1b2c3d4-5678-90ab-cdef-ghijklmnopqr",
  "newPassword": "NewPassword123!"
}
```

### Categories API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/categories | Get all categories with optional type filter |
| POST | /api/categories | Create a new custom category |
| PUT | /api/categories/:id | Update an existing category |
| DELETE | /api/categories/:id | Delete a category |

#### Categories Examples

**Create a new category:**

```json
// POST /api/categories
{
  "name": "Groceries",
  "type": "EXPENSE",
  "icon": "shopping-cart",
  "color": "#4CAF50",
  "description": "For food and household items"
}
```

**Update a category:**

```json
// PUT /api/categories/:id
{
  "name": "Groceries & Supplies",
  "color": "#2E7D32",
  "icon": "shopping-basket"
}
```

**Get categories by type:**

```
GET /api/categories?type=EXPENSE
```

### Savings Goals API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/goals | Get all savings goals |
| POST | /api/goals | Create a new savings goal |
| PUT | /api/goals/:id | Update an existing goal |
| DELETE | /api/goals/:id | Delete a goal |
| PUT | /api/goals/:id/add-funds | Add funds to a goal |
| PUT | /api/goals/:id/complete | Mark a goal as completed |

#### Savings Goals Examples

**Create a new savings goal:**

```json
// POST /api/goals
{
  "name": "New Car",
  "targetAmount": 15000,
  "currentAmount": 500,
  "targetDate": "2024-12-31T00:00:00.000Z",
  "notes": "Saving for a new electric car"
}
```

**Update a savings goal:**

```json
// PUT /api/goals/:id
{
  "name": "Updated Goal Name",
  "targetAmount": 20000,
  "targetDate": "2025-06-30T00:00:00.000Z"
}
```

**Add funds to a goal:**

```json
// PUT /api/goals/:id/add-funds
{
  "amount": 500
}
```

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests:

| Status Code | Description |
|-------------|-------------|
| 200 | OK - The request was successful |
| 201 | Created - A new resource was created |
| 204 | No Content - The request was successful but no content is returned |
| 400 | Bad Request - The request was invalid or cannot be served |
| 401 | Unauthorized - Authentication is required and has failed |
| 403 | Forbidden - The client doesn't have permission to access the resource |
| 404 | Not Found - The requested resource could not be found |
| 409 | Conflict - The request conflicts with the current state of the server |
| 500 | Internal Server Error - An error occurred on the server |

Error responses follow this structure:

```json
{
  "statusCode": 400,
  "message": "Description of the error",
  "error": "Bad Request"
}
```

## Data Models

### User

```json
{
  "id": "cl9ebq7xj000023l29wbg5b2j",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "profileImageUrl": null,
  "createdAt": "2023-01-15T10:30:00.000Z",
  "updatedAt": "2023-04-20T14:15:30.000Z",
  "currency": "USD"
}
```

### Category

```json
{
  "id": "cl9ebqkxk000098l23xjp7y1z",
  "userId": "cl9ebq7xj000023l29wbg5b2j",
  "name": "Groceries",
  "type": "EXPENSE",
  "icon": "shopping-cart",
  "color": "#4CAF50",
  "isDefault": false,
  "description": "For food and household items",
  "createdAt": "2023-04-15T10:30:00.000Z",
  "updatedAt": "2023-05-20T14:15:30.000Z"
}
```

### Savings Goal

```json
{
  "id": "cl9ebqkxk000098l23xjp7y1z",
  "userId": "cl9ebq7xj000023l29wbg5b2j",
  "name": "New Car",
  "targetAmount": 15000,
  "currentAmount": 3500,
  "targetDate": "2023-12-31T00:00:00.000Z",
  "completed": false,
  "notes": "Saving for a new electric car",
  "createdAt": "2023-04-15T10:30:00.000Z",
  "updatedAt": "2023-05-20T14:15:30.000Z",
  "progressPercentage": 23.33,
  "daysRemaining": 225
}
```

## Rate Limiting

To prevent abuse, the API implements rate limiting. Exceeding the rate limit will result in a 429 Too Many Requests response. 