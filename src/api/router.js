const express = require('express');
const {Router} = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan');
const colors = require('colors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const errorHandler = require('./middleware/error');
const ErrorResponse = require('../util/errorResponse');
const {config} = require('../../config')
const userRoutes = require('./routes')
const dotenv = require('dotenv');
dotenv.config()

module.exports = () => {
   
    const router = Router()
    const apiRouter  = Router();

    apiRouter.use(express.json())
          .use(cookieParser())
          .use(cors())
          .use(helmet()) // Set security headers
          .use(mongoSanitize()) // Sanitize
          
    // Dev logging middleware
    if (process.env.NODE_ENV === 'development') {
        router.use(morgan('dev'));
    }

   apiRouter.use(`/api/${config.version}/users`,userRoutes)
   router.use('/',apiRouter)
   router.use(async function(req,res,next){
        const error = new ErrorResponse('Not Found',404,'You shouldn\'t be here !!')
        next(error)})
   router.use(errorHandler)

   return router

}