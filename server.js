const express = require('express');
const { sequelize } = require('./models');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
