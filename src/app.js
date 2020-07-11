const express=require('express')
require('./db/mongoose')
const depositRouter=require('./routers/sliproute')
const path=require('path')
const bodyParser=require('body-parser')
const hbs=require('hbs')

const app=express()
const port=process.env.PORT || 3000

const publicdirpath=path.join(__dirname, '../public')
const viewdirpath=path.join(__dirname, '../templates/views')
const partialpath=path.join(__dirname,'../templates/partial')

app.use(express.static(publicdirpath))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.json())
app.use(depositRouter)

app.set('view engine','hbs')
app.set('views',viewdirpath)
hbs.registerPartials(partialpath)

app.listen(port,()=>{
    console.log('Server is up and running')
})
