const Tarefa = require('../models/tarefa'); 
const tarefas = [];
function getTarefas(req, res) { 
res.render('tarefas', { tarefas }); 
} 
function addTarefa(req, res) { 
const { title } = req.body; 
const tarefa = new Tarefa(Date.now(), title, false); 
tarefas.push(tarefa); 
res.redirect('/tarefas'); 
} 

async function deleteTarefa(req, res){
 
    let idTarefa=req.params.id;
    let msg='';
    if(await Tarefa.deleteTarefa(idTarefa)){
        msg = 'Sucesso!';
    }else{
      msg = 'Falha!';
    }
    res.redirect('/tarefas');
  
  }
  

module.exports = { getTarefas, addTarefa, deleteTarefa};
