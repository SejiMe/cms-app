/*
  Warnings:

  - You are about to drop the column `orderID` on the `Lot` table. All the data in the column will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lot" DROP CONSTRAINT "Lot_orderID_fkey";

-- AlterTable
CREATE SEQUENCE deceased_id_seq;
ALTER TABLE "Deceased" ALTER COLUMN "ID" SET DEFAULT nextval('deceased_id_seq');
ALTER SEQUENCE deceased_id_seq OWNED BY "Deceased"."ID";

-- AlterTable
ALTER TABLE "Lot" DROP COLUMN "orderID";

-- DropTable
DROP TABLE "Payment";

-- CreateTable
CREATE TABLE "_LotToOrder" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LotToOrder_AB_unique" ON "_LotToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_LotToOrder_B_index" ON "_LotToOrder"("B");

-- AddForeignKey
ALTER TABLE "_LotToOrder" ADD CONSTRAINT "_LotToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Lot"("ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LotToOrder" ADD CONSTRAINT "_LotToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("ID") ON DELETE CASCADE ON UPDATE CASCADE;
