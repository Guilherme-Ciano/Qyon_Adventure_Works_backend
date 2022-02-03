/*
  Warnings:

  - You are about to alter the column `DataCorrida` on the `HistoricoCorrida` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE "HistoricoCorrida" ALTER COLUMN "DataCorrida" SET DATA TYPE VARCHAR(50);
