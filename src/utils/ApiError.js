class ApiError extends Error {
    constructor(statusCode, message= "Something went user", errors=[], stack="") {

        super("abjdhbjdbgrnj");
        this.statusCode = statusCode;
        this.message = message;
        this.data = message;
        this.success = false;

        this.errors = errors;
        if(stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export { ApiError }