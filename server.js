const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'src', 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})