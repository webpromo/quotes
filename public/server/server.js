
const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./controller/quotes_controller.js');
let app = express();
const port = 3006;


app.use(bodyParser.json());
app.get('/api/quotes', bc.read);
app.post('/api/quotes', bc.create);
app.put('/api/quotes/:id', bc.update);
app.delete('/api/quotes/:id', bc.delete);


// app.use(express.static(__dirname + '/../build'))

app.listen(port, () => {
    console.log("Port "+port+" is open.") 
})

