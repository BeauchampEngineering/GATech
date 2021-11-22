import CustomError from './custom-error'

class AssetNotFoundError extends CustomError {

    status = 400

    constructor() {
        super('Asset not found')
        Object.setPrototypeOf(this, AssetNotFoundError.prototype)
    }

    serialize() {
        return [{
            message: this.message
        }]
    }

}

export default AssetNotFoundError