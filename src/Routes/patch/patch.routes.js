const patchRoutes = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

patchRoutes.patch("/corredor/update", async (req, res) => {
  const { ID, Nome, Sexo, TemperaturaMediaCorpo, Peso, Altura } = req.body;
  await prisma.competidores
    .update({
      where: { ID },
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
          message: "Corredor atualizado com sucesso!",
          data: corredor,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao atualizar corredor",
          erro: err,
        })
        .status(500);
    });
});

patchRoutes.patch("/pista/update", async (req, res) => {
  const { ID, Nome, Descricao } = req.body;
  await prisma.pistaCorrida
    .update({
      where: { ID },
      data: {
        Nome,
        Descricao,
      },
    })
    .then((pista) => {
      res
        .json({
          status: 200,
          message: "Pista atualizada com sucesso!",
          data: pista,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({ status: 500, message: "Error ao atualizar pista", erro: err })
        .status(500);
    });
});

patchRoutes.patch("/historico_corrida/update", async (req, res) => {
  const {
    HistoricoCorridaId,
    CorredorId,
    PistaId,
    Tempo,
    Distancia,
    DataCorrida,
  } = req.body;
  await prisma.historicoCorrida
    .update({
      where: { HistoricoCorridaId },
      data: {
        CorredorId,
        PistaId,
        Tempo,
        Distancia,
        DataCorrida,
      },
    })
    .then((historico_corrida) => {
      res
        .json({
          status: 200,
          message: "Histórico de corrida atualizado com sucesso!",
          data: historico_corrida,
        })
        .status(200);
    })
    .catch((err) => {
      res
        .json({
          status: 500,
          message: "Error ao atualizar histórico de corrida",
          erro: err,
        })
        .status(500);
    });
});

module.exports = patchRoutes;
