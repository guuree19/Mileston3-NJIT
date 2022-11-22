const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    const Str= [{
        "title": "Front end developer",
        "msg": "welcome"

    }]
    res.end(JSON.stringify(Str))
})


module.exports= router