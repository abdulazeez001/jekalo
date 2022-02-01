const asyncHandler = require('../../util/async')
const ErrorResponse = require('../../util/errorResponse')

module.exports = (repository) =>{
    return {
        post:asyncHandler( async (req,res,next)=>{
            const {body} = req
            await repository.createUser(body).then((result)=>{
                res.status(201)
                   .json({
                       status:'success',
                       message:result.message,
                       data:result.data
                   })
            })}),
        get:asyncHandler(async (req,res,next)=>{
           await repository.getUsers().then((result)=>{
                res.status(200)
                   .json({
                       status:'success',
                       message:result.message,
                       data:result.data
                   })
            })}),
        delete_:asyncHandler(async (req,res,next)=>{
              try{
                const {params} = req
                await repository.deleteUser(params).then((result)=>{
                     res.status(200)
                        .json({
                            status:'success',
                            message:result.message
                        })
                 })

              }catch(error){
                    next(new ErrorResponse(error.message,400,error.errorInfo.name))
              }
        })
    }
}