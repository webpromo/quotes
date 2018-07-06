
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const quoContr = require('./controllers/quotes_controller.js');
let app = express();
// const port = 3006;  // not needed, put port value in .env


app.use(bodyParser.json());
app.get('/api/quotes', quoContr.read);
app.post('/api/quotes', quoContr.create);
app.put('/api/quotes/:id', quoContr.update);
app.delete('/api/quotes/:id', quoContr.delete);

// app.use(express.static(__dirname + '/../build'))

app.listen(process.env.SERVER_PORT, () => {
    console.log("Port "+process.env.SERVER_PORT+" is open.") 
})

// app.listen(process.env.SERVER_PORT, () => {
//     console.log("Port "+process.env.SERVER_PORT+" is open.") 
// })

// app.listen(port, () => {
//     console.log("Port "+port+" is open.") 
// })

