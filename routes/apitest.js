var express = require("express");
var apitest = express.Router();


apitest.post('/:score',(req,res)=>{

    console.log('Hello')

})
apitest.get('/',(req,res)=>{

    console.log('Hello')

})

module.exports = apitest
