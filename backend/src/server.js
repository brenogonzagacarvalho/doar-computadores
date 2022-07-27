const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    alive: true
  })
  res.sendStatus(200)
})



//'https://www.doar-computador-api.herokuapp.com/donation'
app.post('/data', (req, res) => {
  
  const data = {
    "error": true,
    "requiredFields": [
      "name",
      "phone",
      "zip",
      "city",
      "state",
      "streetAddress",
      "number",
      "complement",
      "neighborhood",
      "deviceCount",
      "devices"
    ],
    errorMessage: "Todos os campos obrigatórios devem ser informados"
  }  

  return res.json(data);
})


module.exports = app;