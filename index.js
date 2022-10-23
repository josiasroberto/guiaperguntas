const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/:nome/:lang/:empresa?',(req,res)=>{

  let produtos = [
    {nome:'Creatina', preco:300},
    {nome:'Hipercalórico', preco:120},
    {nome:'Whey', preco:150}
  ]
  
  res.render('./index',{nome:req.params.nome, lang:req.params.lang, 
    empresa:req.params.empresa, produtos:produtos})
})



const PORT = 8081
app.listen(PORT, ()=>{
  console.log('Rodando na porta '+ PORT)
})