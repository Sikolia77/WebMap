const express = require('express')
const app = express ()
const path = require('path')

app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/constituencies', (req,res)=>{
    res.render('constituencies')
})
app.get('/protected', (req,res)=>{
    res.render('protected')
})
app.get('/roads', (req,res)=>{
    res.render('roads')
})



app.listen(4000, ()=>{
    console.log("Server running")
})