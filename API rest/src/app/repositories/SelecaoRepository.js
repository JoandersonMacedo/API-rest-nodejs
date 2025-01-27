import conexao from "../dataBase/conexao.js";

class SelecaoRepository {
    //CRUD
    create(selecao) {
        const sql = 'INSERT INTO selecoes SET ?;';
        return new Promise((resouve, reject) => {
            conexao.query(sql, selecao, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar!');
                
                const row = JSON.parse(JSON.stringify(resultado));
                return resouve(row);
            });
        });
    }

    selectAll() {
        const sql = 'SELECT * FROM selecoes;';
        return new Promise((resouve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar!');
                
                const row = JSON.parse(JSON.stringify(resultado));
                return resouve(row);
            });
        });
    }

    selectById(id) {
        const sql = 'SELECT * FROM selecoes WHERE id=?;';
        return new Promise((resouve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar!');
                
                const row = JSON.parse(JSON.stringify(resultado));
                return resouve(row);
            });
        });
    }

    update(selecao, id) {
        const sql = 'UPDATE selecoes SET ? WHERE id=?;';
        return new Promise((resouve, reject) => {
            conexao.query(sql, [selecao, id], (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar!');
                
                const row = JSON.parse(JSON.stringify(resultado));
                return resouve(row);
            });
        });
    }

    delete(id) {
        const sql = 'DELETE FROM selecoes WHERE id=?;';
        return new Promise((resouve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar!');
                
                const row = JSON.parse(JSON.stringify(resultado));
                return resouve(row);
            });
        });
    }

}

export default new SelecaoRepository();