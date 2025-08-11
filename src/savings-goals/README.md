# Savings Goals API

The Savings Goals API allows users to create, track, and manage their financial saving targets.

## Features

- Create savings goals with target amounts and dates
- Track progress towards goals
- Add funds to existing goals
- Mark goals as completed
- Filter goals by status (active/completed)
- View calculated data like progress percentage and days remaining

## Endpoints

### Get All Savings Goals

```
GET /api/goals
```

Optional query parameters:
- `status`: Filter by goal status ('active' or 'completed')

Returns an array of savings goals with progress calculations.

### Create a Savings Goal

```
POST /api/goals
```

Request body:
```json
{
  "name": "New Car",
  "targetAmount": 15000,
  "currentAmount": 500,
  "targetDate": "2023-12-31T00:00:00.000Z",
  "notes": "Saving for a new electric car"
}
```

Required fields:
- `name`: Goal name (string)
- `targetAmount`: Target amount to save (number)

Optional fields:
- `currentAmount`: Starting amount (number, defaults to 0)
- `targetDate`: Target completion date (ISO date string)
- `notes`: Additional notes (string)

Returns the created goal with progress calculations.

### Update a Savings Goal

```
PUT /api/goals/:id
```

Request body:
```json
{
  "name": "Updated Name",
  "targetAmount": 20000,
  "targetDate": "2024-06-30T00:00:00.000Z",
  "notes": "Updated description"
}
```

All fields are optional - only include the fields you want to update.

Returns the updated goal with progress calculations.

### Delete a Savings Goal

```
DELETE /api/goals/:id
```

Returns a 204 No Content status on success.

### Add Funds to a Goal

```
PUT /api/goals/:id/add-funds
```

Request body:
```json
{
  "amount": 500
}
```

Required fields:
- `amount`: Amount to add to the goal (positive number)

Returns the updated goal with the new amount and progress calculations.

### Mark Goal as Completed

```
PUT /api/goals/:id/complete
```

Marks a goal as completed regardless of the current amount.

Returns the updated goal with completed status.

## Data Models

### Savings Goal

```typescript
{
  id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date | null;
  completed: boolean;
  notes: string | null;
  createdAt: Date;
  updatedAt: Date;
  
  // Calculated fields
  progressPercentage: number;
  daysRemaining: number | null;
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- 400 Bad Request: Invalid input data
- 401 Unauthorized: Authentication required
- 403 Forbidden: User doesn't own the resource
- 404 Not Found: Goal not found
- 500 Internal Server Error: Server-side issues

## Authentication

All endpoints require authentication using JWT. The token should be provided in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN
``` 