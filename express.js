const express = require('express')
const app = express()


//Get
app.get('/', function (req, res) {
  res.send('Hello World 333333!!!!')
})

//GET=> param
app.get('/dog/:color', function (req, res) {
  const data = req.params
  //console.log("color : ", data)
  res.send('<h1 style="color:'+ data.color +';"> 멍멍!! </h1>')
})
// https://~/dog/red

//GET=> query
app.get('/cat', function (req, res) {
  const data = req.query
  console.log("color : ", data)
  res.send('<h1 style="color:'+ data.color +';"> 야~옹 </h1>')
})
// https://~/cat?color=blue



app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(3000)