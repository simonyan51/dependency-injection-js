import injector from './core/utils/injector';
import injectionConfig from './injection-config';
import * as express from 'express';
import initDB from './db-config';
import { DB_CONTEXT } from './helpers/tokens';
import * as bodyParser from 'body-parser';
import routerFactory from './router';

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

app.use(errorHandler);

injectionConfig(injector, app);

initDB('miqartDB', 'postgres', 'gnel1998', {
    host: 'localhost',
    dialect: 'postgres',
    port: 3333,
})
.then(db => {
    injector.registerInjection(DB_CONTEXT, db);
    app.use('/api', routerFactory(express.Router()));
    app.listen(PORT);
});