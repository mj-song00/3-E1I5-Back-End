/*
  Warnings:

  - Added the required column `image` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Profile` ADD COLUMN `image` VARCHAR(191) NOT NULL;
