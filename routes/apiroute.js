var path = require("path");
module.exports = function (app,fs){
const db=require('../NEWREPOforNoteTaker/node_modules/NEWREPOforNoteTaker/Develop/db/db.json');


let database= path.join(__dirname,'NEWREPOforNoteTaker/Develop/db/db.json' );

app.get('/api/notes', function(req,res){
    res.json(db);

});


app.get('/api/notes', function(req,res){
    let notenote= req.body;
    let id=1;
    for (let i=0; i <db.lenghth; i++){
        let note=db[i];
        if (note.id>id){
            id=note.id;
        }
    }
    notenote.id =id +1;
    db.push(notenote);
    fs.writeFile(database, JSON.stringify(db),function(err){

        if (err){
        return console.log (err);
    }
    console.log ("SUCESS");
    });
    res.json(notenote);
});

app.delete ('/api/notes/:id', function(req,res){
let database = path.join(__dirname,'NEWREPOforNoteTaker/Develop/db/db.json')
for (let i=0; i <db.lenghth; i++){
    if(db[i].id===req.params.id){
        db.splice(i,1);
        break;
    }
}
fs.writeFile(database,JSON.stringify(db),function(err){
    if (err){
        return console.log(err);
    } else {
        console.log("DELETED")
    }
});
res.json(db);
});
}
