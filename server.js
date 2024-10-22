const express= require('express')
const dotenv= require('dotenv')
const app= express()
const port=5000
app.listen(port,()=>{
console.log('server started and running at:',(port))

})