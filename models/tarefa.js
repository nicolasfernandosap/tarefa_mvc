class Tarefa { 
    constructor(id, title, description) { 
    this.id = id; 
    this.title = title; 
    this.description = description; 
    } 
    static async deleteTarefa(idTarefa) {
        const db = require('./database');
        if(await db.query(`DELETE FROM tarefa WHERE id_tarefa=${idTarefa}`))
          return true;
        else
          return false;
      }
    

    } 
    module.exports = Tarefa;
    