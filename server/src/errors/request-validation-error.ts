import {ValidationError} from 'express-validator'
import CustomError from './custom-error'

class RequestValidationError extends CustomError {

    status = 400

    constructor(public errors: ValidationError[]) {
        super('Invalid request parameters')
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serialize() {
        return this.errors.map(e => {
            return {message: e.msg, field: e.param}
        })
    }
}

export default RequestValidationError