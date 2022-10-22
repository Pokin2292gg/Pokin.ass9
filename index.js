const express = require('express')
const app = express()

app.get('/',(req,res) => {
res.send('Hello World')
})
app.get('/getname',(req,res) => {
    res.send('Pokin Kittiyapinit')
})
app.listen(3000,() => {
    console.log('Start sever at port 3000.')
})
app.get('/getprofile',(req,res) => {
    let data = {
        name: 'Pokin Kittiyapinit',
        age: 29,
        apocalypse:'trust yourself',
        detail:'learn to more'
    }
    
    
    res.send(data)
})
app.get('/getabout',(req,res) => {
    let data = {
        name: 'Pokin Kittiyapinit',
        age: 29,
        email:'Pokin2292gg@gmail.com',
        address:'330/12'
    }
    
    
    res.send(data)
})
app.get('/getproject',(req,res) => {
    let data = {
        project_name: 'Tom Clancys Rainbow Six Siege Scrimmage SEASON 5',
        project_description:'แข่งเกมRainbow six siege ',
        Project_link:'https://www.youtube.com/watch?v=RW32ibiSSF8'
    }
    
    
    res.send(data)
})
app.get('/getcontact',(req,res) => {
    let data = {
        address:'Thailand',
        email:'Pokin2292gg@gmail.com',
        Phone_number:'0963578139'
    }
    
    
    res.send(data)
})
