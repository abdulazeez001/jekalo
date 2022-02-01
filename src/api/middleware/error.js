const ErrorResponse = require('../../util/errorResponse')

const errorHandler = (err,req,res,next)=>{
    let error = {...err}
    error.message = err.message
    if(error.errorInfo){
        error.errorInfo = err.errorInfo.name
        // Mongoose bad ObjectId
        if(err.errorInfo.name === 'CastError'){
            const message = `Resource not found${err.value}`;
            error = new ErrorResponse(message,404,error.errorInfo)
        }
    
          // Mongoose duplicate key
        if (err.errorInfo.code === 11000) {
            const value = Object.values(err.errorInfo.keyValue);
            const key = Object.keys(err.errorInfo.keyValue);
            const message = `${value} already exits as a ${key}`;
            error = new ErrorResponse(message, 400,error.errorInfo);
        }

        if (err.errorInfo.name === 'ValidationError') {
            const message = Object.values(err.errorInfo.errors).map(val => val.message);
            // const message = error.message
            error = new ErrorResponse(message, 400,error.errorInfo);
          
        }
    
    }
    
    // console.log(err.code)
    res.status(error.statusCode || 500).json({
        status: 'error',
        error: error.message || 'Server Error',
        info:error.info
    });
    
}

module.exports = errorHandler