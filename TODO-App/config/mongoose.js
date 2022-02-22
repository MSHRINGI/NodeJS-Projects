const monggose = require('mongoose');

monggose.connect('mongodb://localhost/todo_app_db');

const db = monggose.connection;

db.on('error', console.error.bind(console, "Error to connecting database"));

db.once('open', function(){
    console.log("Successfully connected to database");
});

module.exports = db;