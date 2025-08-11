-- Create extension for UUID generation if it doesn't exist
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create plan_items table
CREATE TABLE IF NOT EXISTS "plan_items" (
  "id" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "amount" DOUBLE PRECISION NOT NULL,
  "categoryId" TEXT,
  "notes" TEXT,
  "planType" TEXT NOT NULL,
  "itemType" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "plan_items_pkey" PRIMARY KEY ("id")
);

-- Add foreign key constraint for users
ALTER TABLE "plan_items" ADD CONSTRAINT "plan_items_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Add foreign key constraint for categories (optional relationship)
ALTER TABLE "plan_items" ADD CONSTRAINT "plan_items_categoryId_fkey"
  FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Add indexes for better query performance
CREATE INDEX "plan_items_userId_planType_idx" ON "plan_items"("userId", "planType");
CREATE INDEX "plan_items_userId_itemType_idx" ON "plan_items"("userId", "itemType");
CREATE INDEX "plan_items_categoryId_idx" ON "plan_items"("categoryId"); 