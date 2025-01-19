import express from 'express'
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils'
import { inject } from 'inversify';
import { IController } from '../models/interfaces';
import { validateToken } from '../utils/jwt-services'
import { DataServices } from '../data/data-services';

@controller('/movies', validateToken)
export class MovieController implements IController {

    constructor(
        @inject('DataServices') private dataServices: DataServices
    ) {}

    @httpGet('/')
    public async selectData(@request() req:express.Request, @response() res:express.Response){
        const movies = await this.dataServices.select()
        res.status(200).json(movies);
    }


    @httpGet('/:id')
    public async selectItem(@request() req:express.Request, @response() res:express.Response, next: express.NextFunction):Promise<void> {
        const id:number = Number(req.params.id)

        if(isNaN(id)){
            res.status(400).json({'Error': `${req.params.id} is not a number`})
            next();
        }

        const movie = await this.dataServices.selectById(id)
        res.status(200).json(movie);
    }

    @httpPost('/')
    public async createItem(req:express.Request, res:express.Response){
        //TODO
        //const model:MovieType = req.body
        //res.status(200).json({'resule':'done'});
    }

    @httpPut('/:id')
    public async updateMovie(req:express.Request, res:express.Response){
        //TODO
    }

    @httpDelete('/:id')
    public async deleteMovie(req:express.Request, res:express.Response){
        //TODO
    }

}