/*
  Warnings:

  - The primary key for the `PistaCorrida` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `PistaCorrida` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PistaCorrida" DROP CONSTRAINT "PistaCorrida_pkey",
DROP COLUMN "Id",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD CONSTRAINT "PistaCorrida_pkey" PRIMARY KEY ("ID");

-- AddForeignKey
ALTER TABLE "HistoricoCorrida" ADD CONSTRAINT "HistoricoCorrida_CompetidorID_fkey" FOREIGN KEY ("CompetidorID") REFERENCES "Competidores"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoCorrida" ADD CONSTRAINT "HistoricoCorrida_PistaCorridaID_fkey" FOREIGN KEY ("PistaCorridaID") REFERENCES "PistaCorrida"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
