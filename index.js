const express = require('express')
const app = express()
const connection = require('./database/database')
const Pergunta  = require('./database/Pergunta')

//database
connection.authenticate().then(()=>{
  console.log('Conexão feita com o banco de dados!')
}).catch((err)=>{
  console.log(err)
})


app.set('view engine', 'ejs')
app.use(express.static('public'))


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req,res)=>{
  Pergunta.findAll({raw:true, order:[['id','desc']]}).then((perguntas)=>{
    res.render('./index', {perguntas:perguntas})
    
  })
})

app.get('/perguntar',(req,res)=>{
  res.render('./perguntar')
})

app.post('/salvarpergunta',(req,res)=>{
    
  Pergunta.create({
    titulo: req.body.titulo,
    descricao: req.body.descricao
  }).then(()=>{
    res.redirect('/')
  })
  
})

app.get('/pergunta/:id',(req,res)=>{
  Pergunta.findOne({
    where:
    {id:req.params.id}
  }).then((pergunta)=>{
    if(pergunta){
      res.render('./pergunta',{pergunta:pergunta})
    }else{
      res.redirect('/')
    }
  })
})



const PORT = 8081
app.listen(PORT, ()=>{
  console.log('Rodando na porta '+ PORT)
})