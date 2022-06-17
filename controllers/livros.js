const Livro = require('../models/livros')

module.exports = app => {
    app.post('/livros', (req, res) => { 
        const livro = req.body
        Livro.adiciona(livro, res)
    }
    )
    app.get('/livros', (req, res) => {
        Livro.lista(res);
    });
    
    app.get('/livros/:id', (req, res) => { 
        console.log(req.params);
        res.send('OK');
    })
    
}
