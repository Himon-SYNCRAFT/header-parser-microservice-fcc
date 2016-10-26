let express = require('express')

let app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello World')
})

app.listen(port, () =>{
    console.log('App started at port ' + port)
})
