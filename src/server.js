const express = require('express')
const path = require('path')

const app = express()
app.use('/', express.static(path.joins(__dirname, 'src/pages')))

app.listen(9999, ()=> {
    console.log('Server up at 9999')
})