var express = require("express");
var router = express.Router();

var messageController = require("../controllers/messageController");

router.get("/", function (req, res) {
    messageController.testar(req, res);
});

router.get("/listar", function (req, res) {
    messageController.listar(req, res);
});

// router.get("/listar/:idUsuario", function (req, res) {
//     avisoController.listarPorUsuario(req, res);
// });

// router.get("/pesquisar/:descricao", function (req, res) {
//     avisoController.pesquisarDescricao(req, res);
// });

router.post("/publicar/:idUsuario", function (req, res) {
    messageController.publicar(req, res);
});

// router.put("/editar/:idAviso", function (req, res) {
//     avisoController.editar(req, res);
// });

// router.delete("/deletar/:idAviso", function (req, res) {
//     avisoController.deletar(req, res);
// });

module.exports = router;