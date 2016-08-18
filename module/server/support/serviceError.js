export default class ServiceError extends Error {
    constructor(error, code = 0, message = 'error') {
        super(error)
        this.code = code
        this.message = message
    }
}