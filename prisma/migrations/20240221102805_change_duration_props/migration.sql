/*
  Warnings:

  - You are about to alter the column `duration_ms` on the `tracks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `tracks` MODIFY `duration_ms` INTEGER NOT NULL;
