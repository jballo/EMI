const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000


app.use(express.static('static'))


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/invitation', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'invitation.html'))
})

app.get('/accepted', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'acceptance.html'))
})

app.get('/denied', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'denied.html'))
})

app.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`)
})