const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    due_date : {
        type : Date
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;