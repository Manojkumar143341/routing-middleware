const express = require('express')
const app = express()
const PORT = 3500
const router = express.Router()
 
app.use((req,res,next)=>{
   console.log('request method in',req.method)
   next()
})

app.get('/user',(req,res,next)=>{
  console.log('welcome')
  res.send('hii')
  next()
})
app.get('/first',(req,res,next)=>{
  console.log('page')
  res.send('i am')
  next()
})
router.get('/second',(req,res,next)=>{
  console.log('fresh')
  res.send('fine')
  next()
})
app.use('/first',router)

app.listen(3500,()=>console.log('hi'))