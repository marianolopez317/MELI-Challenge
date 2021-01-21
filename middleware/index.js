import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import itemsRoutes from './src/items/itemsRoutes'

const api = express();
const server = express();

const host = '0.0.0.0';
const port = 4000;
server.use(cors());
server.use(helmet());
api.use('/items', itemsRoutes);
server.use('/api', api);
server.listen(port, host, err => {
    if (err) {
        console.error(err.stack || err.message);
        process.exit(1);
    }
    console.log(`Server listening on http://${host}:${port}`);
});
