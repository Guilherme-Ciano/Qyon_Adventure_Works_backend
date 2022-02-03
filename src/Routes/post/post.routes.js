const postRoutes = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

postRoutes.post("/corredor/create", async (req, res) => {
  const { Nome, Sexo, TemperaturaMediaCorpo, Peso, Altura } = req.body;
  await prisma.competidores
    .create({
      data: {
        Nome,
        Sexo,
        TemperaturaMediaCorpo,
        Peso,
        Altura,
      },
    })
    .then((corredor) => {
      res
        .json({
          status: 200,
          message: "Corredor criado com sucesso!",
          data: corredor,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({ status: 500, message: "Error ao criar corredor", erro: err })
        .status(500);
    });
});

postRoutes.post("/pista/create", async (req, res) => {
  const { Nome, Descricao } = req.body;
  await prisma.pistaCorrida
    .create({
      data: {
        Nome,
        Descricao,
      },
    })
    .then((pista) => {
      res
        .json({
          status: 200,
          message: "Pista criada com sucesso!",
          data: pista,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({ status: 500, message: "Error ao criar pista", erro: err })
        .status(500);
    });
});

postRoutes.post("/historico_corrida/create", async (req, res) => {
  const { CompetidorID, PistaCorridaID, TempoGasto, DataCorrida } = req.body;
  await prisma.historicoCorrida
    .create({
      data: {
        CompetidorID,
        PistaCorridaID,
        TempoGasto,
        DataCorrida,
      },
    })
    .then((historico_corrida) => {
      res
        .json({
          status: 200,
          message: "Histórico de corrida criado com sucesso!",
          data: historico_corrida,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao criar histórico de corrida",
          erro: err,
        })
        .status(500);
    });
});

module.exports = postRoutes;
