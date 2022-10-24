const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
  res.render('./index')
})

app.get('/perguntar',(req,res)=>{
  res.render('./perguntar')
})



const PORT = 8081
app.listen(PORT, ()=>{
  console.log('Rodando na porta '+ PORT)
})