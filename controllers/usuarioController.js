const Usuario = require('../models/usuarioModel');

function login(req, res) {
  res.render('login');
}


//  recebe autenticar, params(email, senha), return

function autenticar(req, res) {
    const user=Usuario.autenticar(req.body.email, req.body.senha);

    if(user){
        req.session.user= {id: user.id};
    }
//redirecionar a pagina


  }

module.exports = {login,autenticar};