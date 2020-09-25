const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('thank you for calling me for everything')
})

app.listen(3000, () => console.log('listenting to port 3000'))