import * as jwt from 'jsonwebtoken';

const secretKey = 'exmaple'

export function signToken(payload: any, expiresIn: string = '12h'): string {
    return jwt.sign(payload, secretKey, { expiresIn });
}

export function validateToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) {
        return res.status(401).send({'Error': 'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token, secretKey);

        if(!decoded) {
            return res.status(401).send({'Error': 'Invalid token'})
        }

        res.user = decoded;
        next();
    } catch(e){
        return res.status(500).send({'Error': 'Could not validate JWT token. Please use a new token'});
    }
}