'use strict'

let express = require('express')

let app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response) => {
    let ip = request.ip
    let language = request.get('Accept-Language').split(',').shift()
    let software = request.get('User-Agent')

    let s = software.indexOf('(')
    let e = software.indexOf(')')

    if (e != -1 && s != -1) {
        software = software.slice(s + 1, e)
    }


    response.send(JSON.stringify({ip, language, software}))
})

app.listen(port, () =>{
    console.log('App started at port ' + port)
})
