var database = require("../database/config");


function buscarQuantidadeInstrumentos() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select nomeInstrumento,count(fkInstrumento as "contagemIns" 
                        from instrumento 
                        join usuario on 
                        instrumento.idinstrumento = usuario.fkinstrumento 
                        group by nomeInstrumento;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nomeInstrumento,count(fkInstrumento) as "contagemIns" 
                        from instrumento 
                        join usuario on 
                        instrumento.idinstrumento = usuario.fkinstrumento 
                        group by nomeInstrumento;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuantidadeUsuarios() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(idUsuario) as "qtdUsuarios" from usuario;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(idUsuario) as "qtdUsuarios" from usuario;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





module.exports = {
    buscarQuantidadeUsuarios,
    buscarQuantidadeInstrumentos
}
