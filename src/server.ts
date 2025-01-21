import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { signToken } from './utils/jwt-services';
import { IDataServices } from './models/interfaces';
import container from './middleware/containers'
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import YAML from 'yamljs';
import bodyParser from 'body-parser';
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const swagger_endpoint = process.env.SWAGGER_ENDPOINT || ''
const token = signToken({});
const server = new InversifyExpressServer(container);

const corsOptions = {
    origin: `http://localhost:${process.env.CORS_PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

server.setConfig((app) => {
    app.use(express.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors(corsOptions))

    const swaggerDocument = YAML.load('./swagger.yaml');
    app.use(swagger_endpoint, swaggerUI.serve, swaggerUI.setup(swaggerDocument));
})

server.setErrorConfig((app) => {
    app.use((err: Error, req: any, res: any, next: any) => {
        res.status(500).send({'Error': err.message.toString() });
    });
});

const db:IDataServices = container.get<IDataServices>('DataServices')
const serverInstance = server.build()

serverInstance.listen(PORT, () => {
    db.connect().then(() => {
        console.log('');
        console.log(`Server running on: http://localhost:${process.env.PORT} `);
        console.log(`PORT: ${PORT}`);
        console.log(`TOKEN: ${token}`);
        console.log(`SWAGGER: http://localhost:${PORT}${swagger_endpoint}`);
    })
})