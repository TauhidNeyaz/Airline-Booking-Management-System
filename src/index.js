const exprees = require('express');

const { PORT } = require('./config');
const apiRoutes = require('./routes');

const app = exprees();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Success started the server on port :${PORT}`);
});