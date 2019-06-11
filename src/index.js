const express = require('express');
const bodyParser = require('body-parser');
const injector = require('./core/utils/injector');
const injectionConfig = require('./injection-config');
const initDB = require('./db-config');
const { DB_CONTEXT } = require('./helpers/tokens');
const routerFactory = require('./router');

const app = express();

const PORT = process.env.PORT || 3000;

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// app.use(errorHandler);

injectionConfig(injector, app);

initDB('miqartDB', 'postgres', 'gnel1998', {
    host: 'localhost',
    dialect: 'postgres',
    port: 3333,
}, 'models')
.then(db => {
    injector.registerInjection(DB_CONTEXT, db);
    app.use('/api', routerFactory(express.Router()));
    app.listen(PORT);
});