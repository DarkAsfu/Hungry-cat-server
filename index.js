const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('The hungry cat coming !!!....')
})

app.listen(port, () =>{
    console.log(`The hungry cat api running on port: ${port}`)
})