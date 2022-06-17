const moment = require('moment')
const conexao = require('../infraestrutura/conexao')
class Livro {
    adiciona(livro, res) {
       
        const publicacao = moment(livro.publicacao, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        

        
            const livroAdd = { ...livro, publicacao}

            const sql = 'INSERT INTO Livros SET ?'
            

            conexao.query(sql, livroAdd, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }

            })


        
    }

    lista(res) {
        const sql = 'SELECT * FROM Livros'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    
}



module.exports = new Livro
