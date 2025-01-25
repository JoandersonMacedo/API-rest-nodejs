import express from 'express';
import conexao from '../infra/conexao.js'

const app = express();

// indicar para o app ler boby com json
app.use(express.json());

function encontrarSelecaoPorId (id) {
    return selecoes.filter(selecao => selecao.id == id);
}

function encontrarIndexPorId (id) {
    return selecoes.findIndex(selecoes => selecoes.id == id);
}

app.post('/selecoes', (req, res) => {
    // selecoes.push(req.body);
    // res.status(201).send('Seleção cadastrada com sucesso!');
    const selecao = req.body;
    const sql = 'INSERT INTO selecoes SET ?;';
    conexao.query(sql, selecao, (erro, resultado) => {
        if (erro) {
            res.status(404).json({'erro' : erro});
        } else {
            res.status(201).json(resultado);
        }
    });
});

app.get('/selecoes', (req, res) => {
    // res.status(200).send(selecoes);
    const sql = 'SELECT * FROM selecoes;';
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(404).json({'erro' : erro});
        } else {
            res.status(200).json(resultado);
        }
    });
});

app.get('/selecoes/:id', (req, res) => {
    // res.json(encontrarSelecaoPorId(req.params.id));
    const id = req.params.id
    const sql = 'SELECT * FROM selecoes WHERE id=?;';
    conexao.query(sql, id, (erro, resultado) => {
        const linha = resultado[0];
        if (erro) {
            res.status(404).json({'erro' : erro});
        } else {
            res.status(200).json(linha);
        }
    });
});

app.put('/selecoes/:id', (req, res) => {
    // let index = encontrarIndexPorId(req.params.id);
    // selecoes[index].selecao = req.body.selecao;
    // selecoes[index].grupo = req.body.grupo;
    // res.send(selecoes);
    const id = req.params.id;
    const selecao = req.body;
    const sql = 'UPDATE selecoes SET ? WHERE id=?;';
    conexao.query(sql, [selecao, id], (erro, resultado) => {
        if (erro) {
            res.status(404).json({'erro' : erro});
        } else {
            res.status(200).json(resultado);
        }
    });
});

app.delete('/selecoes/:id', (req, res) => {
    // let index = encontrarIndexPorId(req.params.id);
    // selecoes.splice(index, 1);
    // res.send(`A seleção com id ${req.params.id} foi deletada com sucesso!`);
    const id = req.params.id
    const sql = 'DELETE FROM selecoes WHERE id=?;';
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            res.status(404).json({'erro' : erro});
        } else {
            res.status(200).json(resultado);
        }
    });
});

export default app;
