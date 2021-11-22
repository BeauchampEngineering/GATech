import CustomError from './custom-error'

class UserNotFoundError extends CustomError {

    status = 400

    constructor() {
        super('User not found')
        Object.setPrototypeOf(this, UserNotFoundError.prototype)
    }

    serialize() {
        return [{
            message: this.message
        }]
    }

}

export default UserNotFoundError