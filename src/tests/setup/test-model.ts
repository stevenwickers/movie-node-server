import {getModelForClass, prop} from '@typegoose/typegoose';

export type BookModelType = {
    "id": number
    "author": string
    "country": string
    "imageLink": string
    "language": string
    "link": string
    "pages": number
    "title": string
    "year": number
}

export class BookModel {

    @prop()
    public id!:number

    @prop()
    public author!:string

    @prop()
    public title!:string

    @prop()
    public country?:string

    @prop()
    public imageLink?:string

    @prop()
    public language?:string

    @prop()
    public link?:string

    @prop()
    public pages?:number

    @prop()
    public year?:number
}

export const BookModelSchema = getModelForClass(BookModel, { schemaOptions: { _id: false, versionKey: false, timestamps: true } });
