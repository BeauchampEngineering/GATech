import CustomError from './custom-error'

class LogNotFoundError extends CustomError {

    status = 400

    constructor() {
        super('Log not found')
        Object.setPrototypeOf(this, LogNotFoundError.prototype)
    }

    serialize() {
        return [{
            message: this.message
        }]
    }

}

export default LogNotFoundError