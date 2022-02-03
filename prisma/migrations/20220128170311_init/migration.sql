/*
  Warnings:

  - Added the required column `Nome` to the `PistaCorrida` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PistaCorrida" ADD COLUMN     "Nome" VARCHAR(50) NOT NULL;
