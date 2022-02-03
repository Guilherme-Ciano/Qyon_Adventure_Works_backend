const deleteRoutes = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

deleteRoutes.delete("/competidor/id=:x", async (req, res) => {
  var ID = req.params.x;
  await prisma.competidores
    .delete({
      where: {
        ID: parseInt(ID),
      },
    })
    .then((competidores) => {
      res
        .json({
          status: 200,
          message: "competidores deletado com sucesso!",
          data: competidores,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao deletar competidores",
          erro: err,
        })
        .status(500);
    });
});

deleteRoutes.delete("/pista/id=:x", async (req, res) => {
  var id = req.params.x;
  await prisma.pistaCorrida
    .delete({
      where: {
        ID: parseInt(id),
      },
    })
    .then((pista) => {
      res
        .json({
          status: 200,
          message: "Pista deletada com sucesso!",
          data: pista,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({ status: 500, message: "Error ao deletar pista", erro: err })
        .status(500);
    });
});

deleteRoutes.delete("/historico_corrida/id?=:id", async (req, res) => {
  const { id } = req.params;
  await prisma.historicoCorrida
    .delete({
      where: {
        id,
      },
    })
    .then((historico_corrida) => {
      res
        .json({
          status: 200,
          message: "Histórico de corrida deletado com sucesso!",
          data: historico_corrida,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao deletar histórico de corrida",
          erro: err,
        })
        .status(500);
    });
});

deleteRoutes.delete("/all/competidores", async (req, res) => {
  await prisma.competidores
    .deleteMany({})
    .then((competidores) => {
      res
        .json({
          status: 200,
          message: "competidores deletados com sucesso!",
          data: competidores,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao deletar competidores",
          erro: err,
        })
        .status(500);
    });
});

deleteRoutes.delete("/all/pistas", async (req, res) => {
  await prisma.pistaCorrida
    .deleteMany({})
    .then((pistas) => {
      res
        .json({
          status: 200,
          message: "Pistas deletadas com sucesso!",
          data: pistas,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({ status: 500, message: "Error ao deletar pistas", erro: err })
        .status(500);
    });
});

deleteRoutes.delete("/all/historico_corridas", async (req, res) => {
  await prisma.historicoCorrida
    .deleteMany({})
    .then((historico_corridas) => {
      res
        .json({
          status: 200,
          message: "Histórico de corridas deletados com sucesso!",
          data: historico_corridas,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao deletar histórico de corridas",
          erro: err,
        })
        .status(500);
    });
});

module.exports = deleteRoutes;
