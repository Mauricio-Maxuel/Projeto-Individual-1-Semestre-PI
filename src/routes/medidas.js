var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.get("/ultimosInstrumentos", function (req, res) {
    medidaController.buscarQuantidadeInstrumentos(req, res);
});

router.get("/quantidadeUsuarios", function (req, res) {
    medidaController.buscarQuantidadeUsuarios(req, res);
});


// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;