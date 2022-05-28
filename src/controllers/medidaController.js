var medidaModel = require("../models/medidaModel");

function buscarQuantidadeInstrumentos(req,res){
    const limite_linhas = 7;

    // var idInstrumento = req.params.idInstrumento;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarQuantidadeInstrumentos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarQuantidadeUsuarios(req,res){
    const limite_linhas = 7;

    // var idInstrumento = req.params.idInstrumento;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarQuantidadeUsuarios().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarQuantidadeInstrumentos,
    buscarQuantidadeUsuarios

}