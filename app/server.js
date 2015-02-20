var express = require('express'),
    app = express();

app.configure(function () {
              app.use(express.static(__dirname, '/'));
});


app.get('/donors/:d', function(req, res){
    var donorId = parseInt(req.params.id);
    var data = {};
    for (var i =0, len=donors.length;i<len;i++){
        if (donors[i].id === donorId){
            data = donors[i];
            break;
        }
        
    }
    res.json(data);
});

app.get('/donors', function (req,res){
    res.json(donors);
    
});

app.listen(8080);

console.log("express listening on port 8080");