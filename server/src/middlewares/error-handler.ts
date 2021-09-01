import {Request, Response, NextFunction} from 'express'
import CustomError from '../errors/custom-error'

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof CustomError) {
        res.status(err.status).json(err.serialize())
    } else {
        res.status(500).json([
            {message: err.message || 'Something went wrong'}
        ])
    }
}

export default errorHandler