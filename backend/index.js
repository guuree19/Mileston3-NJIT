const express = require('express')
const { config } = require('dotenv');
const bodyparser= require('body-parser')
const routeHandler= require('./routes/handler.js')
const App= express();
config()

App.use(bodyparser.urlencoded({extended:false}))
App.use(bodyparser.json())
App.use('/',routeHandler)


App.get('/',(req, res) => {
    res.send('Application is working okS!');


});
// BACKEND 
const PORT = parseInt(process.env.PORT) || 3000;
App.listen(PORT, ()=>{
    console.log( `server is listening on port ${PORT}`)


})