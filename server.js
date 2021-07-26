const express = require('express')
const app = express()
const path = require('path')


app.use(express.static('public'))


app.listen(8000, (err) => {
    if(err) {
        console.log(err)
    }
})

app.get('/', (req, res) => {
    const homePage = path.join(__dirname, 'public', 'home.html')
    res.sendFile(homePage)
})

app.use('/login', (req, res) => {
    const loginPage = path.join(__dirname, 'public', 'login.html')
    res.sendFile(loginPage)
})

app.use('/dashboard', (req, res) => {
    const dashboardPage = path.join(__dirname, 'public', 'dashboard.html')
    res.sendFile(dashboardPage)
})