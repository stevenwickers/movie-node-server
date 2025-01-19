import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'

export class MovieModel {

    @prop({ alias: 'movie_id' })
    public id!:number

    @prop({ alias: 'movie_name'})
    public title!:string

    @prop({ alias: 'release_date'})
    public releaseDate?:string

    @prop({ alias: 'worldwide_gross'})
    public worldwideGross?:string

    @prop({ alias: 'production_budget'})
    public productionBudget?:string

    @prop({ alias: 'domestic_gross'})
    public domesticGross?:string

    @prop({ alias: 'movie_link'})
    public link?:string

    @prop()
    public genre?:string[]
}

export const MovieModelSchema = getModelForClass(MovieModel, {
    schemaOptions: {
        _id: false,
        versionKey: false,
        timestamps: true
    }
});

export type MovieType = {
    id: number
    title: string
    releaseDate: string
    worldwideGross: string
    productionBudget: string
    domesticGross: string
    link: string
    genre: string[]
}
