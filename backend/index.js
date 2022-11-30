const express = require('express')
const { config } = require('dotenv');
const bodyparser= require('body-parser')
const mongoose = require('mongoose')
const routeHandler= require('./routes/handler.js')
const App= express();
config()

App.use(bodyparser.urlencoded({extended:false}))
App.use(bodyparser.json())


// App.use('/',routeHandler)

App.get('/',(req, res) => {
    res.send('Application is working ok!');
});

// DB Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then( ()=>{
        console.log('DB is connected')
    })
    .catch( (err) =>{
        console.log('err')
    })

// BACKEND 
const PORT = process.env.PORT || 5000;
App.listen(PORT, ()=>{

    console.log( `server is listening on port ${PORT}`)

})