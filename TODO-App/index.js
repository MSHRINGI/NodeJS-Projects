const express = require('express');
const port = 8080;
const app = express();
const db = require('./config/mongoose');
const Task = require('./models/task');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('./assets'));

app.get('/', function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log("Error in fetching tasks");
            return;
        }
        return res.render('home', {
            title : 'TODO App',
            task_list : tasks,
            moment : moment
        });
    });
});

var moment = require('moment');
app.post('/create-task', function(req, res){
    Task.create({
        description : req.body.description,
        due_date : req.body.date ,
        category : req.body.category
    },function(err, newTask){
        if(err){
            console.log('Error in creating contact');
            return;
        }
        console.log("created Task = ", newTask);
        return res.redirect('back');
    });
});

app.get('/delete-task', function(req, res){
    let id = req.query.id;
    Task.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleting the contact");
            return;
        }
        return res.redirect('back');
    })
});

app.get('/delete-all-task', function(req, res){
    Task.remove({}, function(err){
        if(err){
            console.log("Error in deleting all task.");
            return;
        }
        return res.redirect('back');
    });
})

app.listen(port, function(err){
    if(err){
        console.log("Error", err);
        return;
    }
    console.log("Server is up and running at port: ", port);
});