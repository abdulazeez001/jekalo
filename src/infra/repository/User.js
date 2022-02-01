const model = require("../model/User")

class UserRepository{
    constructor(model){
        this.model = model
    }

   async createUser({first_name,last_name,username,date_of_birth}){
        return new Promise(async (resolve,reject) => {
            try{
               const user = await this.model.create({
                 first_name,
                 last_name,
                 username,
                 date_of_birth
                })

                resolve({
                    data:user,
                    message:'User created successfully'
                })
               }catch(error){
                console.log(error)
                   reject({
                       errorInfo:error,
                       message:'Unable to create user'
                   })
               }
          })
    }

   async getUsers(){
        return new Promise(async (resolve,reject) => {
            try{
                const user = await this.model.find({})
                if(!user){
                    resolve({
                        data:[],
                        message:'Users list retrived successfully'
                    })
                }
                resolve({
                    data:user,
                    message:'Users list retrived successfully'
                })
            }catch(error){
                reject({
                    errorInfo:error,
                    message:'Unable to retrive users list'
                })
            }
        })
    }
  
   async deleteUser({username}){
    return new Promise(async (resolve,reject) => {
        try{
            
         const user =  await this.model.findOneAndDelete({username})
         if(!user){
            reject({
                errorInfo:new Error('Bad Request'),
                message:'Username is undefined'
            })
         }
            resolve({
                message:'You deleted the user successfully'
            })
           }catch(error){
               reject({
                errorInfo:error,
                message:'Unable to delete user'
            })
           }
      })
   }

}

module.exports = new UserRepository(model)