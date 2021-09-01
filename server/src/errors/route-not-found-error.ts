import CustomError from './custom-error'

class RouteNotFoundError extends CustomError {

    status = 404

    constructor() {
        super('Route not found')
        Object.setPrototypeOf(this, RouteNotFoundError.prototype)
    }

    serialize() {
        return [{
            message: this.message
        }]
    }

}

export default RouteNotFoundError