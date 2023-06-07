const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});
app.listen(PORT, () => {
    console.log('http://localhost:'+PORT);
});
