const http = require('http')
const PORT = 8080
const fs = require('fs')
const path = require('path')


const webServer = http.createServer((req,res) => {

    const filePath = './public' + req.url

    console.log(filePath)


    fs.readFile(filePath, (err,data) => {

        if(err) {
            res.writeHead(404, {'content-type':'text/html'})
            return res.end()
        }

        res.writeHead(200, {'content-type':'text/html'})
        res.write(data)
        return res.end()
    })
})

webServer.listen(PORT, (err) => {
    if(err) {
        console.log('Some Error Occured')
    } else {
        console.log('Server is up and running')
    }
})