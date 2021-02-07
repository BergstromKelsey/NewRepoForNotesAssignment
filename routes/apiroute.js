var path = require("path");


module.exports = function (app,fs){
const db=require('/Users/kelseybergstrom/Desktop/Class Activites/11-express/NewRepoForNotesAssignment/db/db.json');


let dbFile= path.join(__dirname,'/Users/kelseybergstrom/Desktop/Class Activites/11-express/NewRepoForNotesAssignment/db/db.json' );

app.get('/api/notes', function(req,res){
    res.json(db);

});


app.post('/api/notes', function(req,res){
    let notenote= req.body;
    let id=1;
    for (let i=0; i <db.length; i++){
        let note=db[i];
        if (note.id>id){
            id=note.id;
        }
    }
    notenote.id =id + 1;
    db.push(notenote)
    fs.writeFile(dbFile, JSON.stringify(db),function(err){

        if (err){
        return console.log (err);
    }
    console.log ("SUCESS");
    });
    res.json(notenote);
});

app.delete ('/api/notes/:id', function(req,res){
let dbFile = path.join(__dirname,'/Users/kelseybergstrom/Desktop/Class Activites/11-express/NewRepoForNotesAssignment/db/db.json')
for (let i=0; i <db.length; i++){
    if(db[i].id== req.params.id){
        db.splice(i,1);
        break;
    }
}
fs.writeFile(dbFile,JSON.stringify(db),function(err){
    if (err){
        return console.log(err);
    } else {
        console.log("DELETED");
    }
});
res.json(db);
});
}
