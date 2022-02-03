-- CreateTable
CREATE TABLE "Competidores" (
    "ID" SERIAL NOT NULL,
    "Nome" VARCHAR(150) NOT NULL,
    "Sexo" VARCHAR(1) NOT NULL,
    "TemperaturaMediaCorpo" DOUBLE PRECISION NOT NULL,
    "Peso" DOUBLE PRECISION NOT NULL,
    "Altura" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Competidores_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "HistoricoCorrida" (
    "ID" SERIAL NOT NULL,
    "CompetidorID" INTEGER NOT NULL,
    "PistaCorridaID" INTEGER NOT NULL,
    "DataCorrida" TIMESTAMP(3) NOT NULL,
    "TempoGasto" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "HistoricoCorrida_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "PistaCorrida" (
    "Id" SERIAL NOT NULL,
    "Descricao" VARCHAR(50) NOT NULL,

    CONSTRAINT "PistaCorrida_pkey" PRIMARY KEY ("Id")
);
