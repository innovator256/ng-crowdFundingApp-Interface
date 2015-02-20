var express = require('express'),
    app = express();

app.set(function () {
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

//quick server request test

       var donors = [
            
            {
                id : 1,
                joined: "2000-12-01",
                address: "1e2wfrf044g",
                token: 10000000,
                amount:"20005btc"
            },
            
            {
                id : 2,
                joined: "2002-2-02",
                address: "1d4254frg4",
                token: 100000,
                amount:"50btc"
            },
            
            {
                id : 3,
                joined: "2003-12-09",
                address: "134rr3p1rg0",
                token: 1000000,
                amount:"100btc"
            },
            
            {
                id : 4,
                joined: "2004-1-06",
                address: "134rr3p1rg0",
                token: 1000,
                amount:"10btc"
            }
        
        ];
        