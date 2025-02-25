const exprees = require('express');

const { PORT } = require('./config');

const app = exprees();

app.listen(PORT, () => {
    console.log(`Success started the server on port :${PORT}`);
});