const express = require('express');
const router = require('./router')();
const {config} = require('../../config');
const dotenv = require('dotenv');
dotenv.config()

const server = ({config, router}) => {
  const app = express()

  app.use(router)

  // for static folder
  app.use(express.static('public'))

  return {
    app,
    start: () => {
        app.listen(config.port,
          console.log(
            `Server running in ${process.env.NODE_ENV} mode on port ${config.port}`.yellow.bold
            )
        )
        // Handle unhandled promise rejections
        process.on('unhandledRejection', (err, promise) => {
          console.log(`Error: ${err.message}`.red);
          });
      }
  }

}

module.exports = server({config,router})