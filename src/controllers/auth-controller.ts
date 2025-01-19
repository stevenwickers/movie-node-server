import { controller, httpGet, request, response } from 'inversify-express-utils';
import { signToken } from '../utils/jwt-services';
import express from 'express';

@controller('/auth')
export class AuthController {

    @httpGet('/')
    public getAuth(@request() req:express.Request, @response() res:express.Response) {
        const token = signToken({})
        res.status(200).send(token)
    }
}