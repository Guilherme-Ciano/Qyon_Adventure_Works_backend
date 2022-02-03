const getRoutes = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const parse = require("nodemon/lib/cli/parse");
const prisma = new PrismaClient();

getRoutes.get("/all/competidores", async (req, res) => {
  await prisma.competidores
    .findMany()
    .then((competidores) => {
      res
        .json({
          status: 200,
          message: "Competidores listados com sucesso!",
          data: competidores,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao listar competidores",
          erro: err,
        })
        .status(500);
    });
});

getRoutes.get("/all/pistas", async (req, res) => {
  await prisma.pistaCorrida
    .findMany()
    .then((pistas) => {
      res
        .json({
          status: 200,
          message: "Pistas listadas com sucesso!",
          data: pistas,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({ status: 500, message: "Error ao listar pistas", erro: err })
        .status(500);
    });
});

getRoutes.get("/all/historico_corridas", async (req, res) => {
  await prisma.historicoCorrida
    .findMany()
    .then((historico_corridas) => {
      res
        .json({
          status: 200,
          message: "Histórico de corridas listados com sucesso!",
          data: historico_corridas,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao listar histórico de corridas",
          erro: err,
        })
        .status(500);
    });
});

getRoutes.get("/historico_corridas/id=:x", (req, res) => {
  var id = req.params.x;
  prisma.historicoCorrida
    .findMany({
      where: {
        CompetidorID: parseInt(id),
      },
    })
    .then((historico_corridas) => {
      res
        .json({
          status: 200,
          message: "Histórico de corridas listados com sucesso!",
          data: historico_corridas,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao listar histórico de corridas",
          erro: err,
        })
        .status(500);
    });
});

module.exports = getRoutes;
