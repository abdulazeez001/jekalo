class ErrorResponse extends Error{
    constructor(message,statusCode,info){
        super(message);
        this.statusCode = statusCode;
        this.info = info

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = ErrorResponse;