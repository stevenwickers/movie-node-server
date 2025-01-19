import express from 'express';

export interface IController {
    selectData: (res: express.Request, req: express.Response) => Promise<void>
    selectItem: (res: express.Request, req: express.Response, next: express.NextFunction) => Promise<void>
    createItem: (res: express.Request, req: express.Response, next: express.NextFunction) => Promise<void>
}

export interface IDataServices {
    connect: () => Promise<void>
    disconnect: () => Promise<void>
    dropCollections: () => Promise<void>
    select: <T>() => Promise<T[]>
    selectById: <T>(id: number) => Promise<T | null>
    insert: <T>(item:T) => Promise<T>
}

export interface IMongoServices {
    connectDB: () => Promise<void>
    dropDB: () => Promise<void>
    dropCollections: () => Promise<void>
}