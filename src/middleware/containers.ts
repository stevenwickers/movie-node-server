import { Container } from 'inversify'
import { MovieModelSchema, MovieType } from '../models/movie-model';
import { IDataServices, IController } from '../models/interfaces';
import { DataServices } from '../data/data-services';
import { MovieController } from '../controllers/movie-controller';
import {AuthController} from '../controllers/auth-controller';
require("dotenv").config();

const connectString = process.env.CONNECTION_STRING || ''

const container = new Container();
container.bind<string>('ConnectionString').toConstantValue(connectString);
container.bind('Schema').toConstantValue(MovieModelSchema);
container.bind<AuthController>(AuthController).toSelf();
container.bind<IDataServices>('DataServices').to(DataServices); //.inSingletonScope()
container.bind<IController>('Controller').to(MovieController); //.inSingletonScope()

export default container
