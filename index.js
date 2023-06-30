const express = require("express");

const app = express();

app.get('/car', (req,res)=>{
    res.json({
        "car name": "BMW",
        "car Model": "2023",
        "car price": 500000
    });

});

app.get('/search/:query', (req,res)=>{
    res.send(`
        <html>
            <body>
             <h1> ${(req.params.query).replace(/[a-zA-Z]/g,"0")} </h1>
            </body>
        </html>
    `);

});

app.listen(3000, ()=>{
    console.log("App running on PORT 3000");
})