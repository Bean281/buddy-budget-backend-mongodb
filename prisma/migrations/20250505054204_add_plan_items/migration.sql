-- CreateTable
CREATE TABLE "plan_items" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "notes" TEXT,
    "planType" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "categoryId" TEXT,

    CONSTRAINT "plan_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "plan_items_userId_planType_idx" ON "plan_items"("userId", "planType");

-- CreateIndex
CREATE INDEX "plan_items_userId_itemType_idx" ON "plan_items"("userId", "itemType");

-- AddForeignKey
ALTER TABLE "plan_items" ADD CONSTRAINT "plan_items_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plan_items" ADD CONSTRAINT "plan_items_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
