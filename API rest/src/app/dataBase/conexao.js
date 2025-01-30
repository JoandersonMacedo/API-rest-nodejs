import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '78951',
    database: 'bdcopa'
});

conexao.connect();

/**
 * Executa um código sql
 * @param {string} sql Instrução SQL a ser executada
 * @param {number | {} | [{}, number]} valores Valores a serem passados na instrução SQL
 * @param {string} mensagemReject Mensagem a ser exibida em caso de erro
 * @returns Objeto da Promise
 */
export const consulta = (sql, valores = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if (erro) return reject(mensagemReject);

            const row = JSON.parse(JSON.stringify(resultado));
            return resolve(row);
        });
    });
}

export default conexao;
