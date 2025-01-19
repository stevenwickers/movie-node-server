import { inject } from 'inversify'
import {IDataServices} from '../models/interfaces';
import { MongoMemoryServer } from 'mongodb-memory-server'
import { ReadInFile } from '../utils/file-utils';
import mongoose from 'mongoose';

export class DataServices implements IDataServices {
    private _mongod;
    private _mongoose;

    constructor(
        @inject('ConnectionString') private connectionString: string,
        @inject('Schema') private schema: any
    ) {}

    connect = async (): Promise<void> => {
        const data = await ReadInFile(this.connectionString)

        const mongod = await MongoMemoryServer.create()
        const uri = mongod.getUri()
        await mongoose.connect(uri);
        await this.schema.insertMany(data)

        this._mongod = mongod;
        this._mongoose = mongoose
    }

    select = async <T>(): Promise<T[]> => {
        return await this.schema.find()
    }

    selectById = async <T>(id: number): Promise<T | null> => {
        return await this.schema.find({id: id})
    }

    insert = async <T>(item:T) => {
        await this.schema.insertMany(item)
        return item
    }

    disconnect = async (): Promise<void> => {
        if (this._mongod) {
            await this._mongoose.connection.dropDatabase();
            await this._mongoose.connection.close();
            await this._mongod.stop();
        }
    }

    dropCollections = async () => {
        if (this._mongod) {
            const collections = await this._mongoose.connection.db.collections();
            for (let collection of collections) {
                await collection.drop();
            }
        }
    };

}