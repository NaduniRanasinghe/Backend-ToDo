const mongodb = require('mongoose');

const schema = mongodb.Schema;

let Todo = new schema({

    todo_description:{
        type:String
    },
    todo_responsible:{
      type:String
    },
    todo_priority:{
        type:String
    },
    todo_completed:{
        type:Boolean
    }

});

module.exports = mongodb.model('Todo', Todo);