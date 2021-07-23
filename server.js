const http = require('http')
const PORT = 8080
const fs = require('fs')
const path = require('path')


const webServer = http.createServer((req,res) => {

    if(req.url === '/') {
        fs.readFile('./public/home.html', 'UTF-8', (err, data) => {
            res.writeHead(200, {'content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(req.url.match('\.css')) {
        let filePath = path.join(__dirname, 'public', req.url)
        let fileStream = fs.createReadStream(filePath, 'UTF-8')
        res.writeHead(200, {'content-type':'text/css'})
        fileStream.pipe(res)
        
    } else if(req.url == "/services.html") {
        let servicesFile = path.join(__dirname,'public',req.url)
        let serviceStream = fs.createReadStream(servicesFile, 'UTF-8')
        res.writeHead(200, {'content-type':'text/html'})
        serviceStream.pipe(res)
        
    }else if(req.url.match('\.jpg')) {
        let jpgPath = path.join(__dirname, req.url)
        let jpgStream = fs.createReadStream(jpgPath)
        res.writeHead(200, {'content-type':'image/jpg'})
        jpgStream.pipe(res)

    }else if(req.url.match('\.png')) {
        let jpgPath = path.join(__dirname, req.url)
        let jpgStream = fs.createReadStream(jpgPath)
        res.writeHead(200, {'content-type':'image/png'})
        jpgStream.pipe(res)
    
    } else if (req.url == '/login.html') {
        let loginPath = path.join(__dirname, 'public', req.url)
        let loginSteram = fs.createReadStream(loginPath, 'UTF-8')
        res.writeHead(200, {'content-type':'text/html'})
        loginSteram.pipe(res)
    }

    
    
    // let filePath = path.join(__dirname,'public',req.url)

    // console.log(filePath)

    // let fileStream = fs.createReadStream(filePath, 'UTF-8')

    // res.writeHead(200)

    // fileStream.pipe(res)



    
    
})

webServer.listen(PORT, (err) => {
    if(err) {
        console.log('Some Error Occured')
    } else {
        console.log('Server is up and running')
    }
})