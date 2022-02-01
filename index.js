
const server = require('./src/api/server')
const database = require('./config')

function Application({server,database}){
    return {
        start:()=>{
            Promise
            .resolve()
            .then(database.connectDB())
            .then(server.start)
            
        }
    }
}

Application({server,database}).start()
