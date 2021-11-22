import CustomError from './custom-error'

class GroupNotFoundError extends CustomError {

    status = 400

    constructor() {
        super('Group not found')
        Object.setPrototypeOf(this, GroupNotFoundError.prototype)
    }

    serialize() {
        return [{
            message: this.message
        }]
    }

}

export default GroupNotFoundError