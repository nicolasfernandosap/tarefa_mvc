const express = require('express');
const session = require('express-session');
const tarefaController = require('./controllers/tarefaController');
const usuarioController = require('./controllers/usuarioController');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); 
app.get('/', (req, res)=>{res.send("<h1>API Tarefas</h1>")});

app.use(session({secret: '123456', cookie:{maxAge:60000}}))

app.use(express.urlencoded({ extended: true })); 

app.get('/tarefas', tarefaController.getTarefas); 
app.get('/tarefa/delete/:id', tarefaController.deleteTarefa);
app.post('/tarefas', tarefaController.addTarefa); 

app.get('/login,', usuarioController.login);
app.post('/usuario/autenticar,', usuarioController.autentiar);

app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});


