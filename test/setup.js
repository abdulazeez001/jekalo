const chai = require('chai');
const request = require('supertest');
const mongoose = require('mongoose')
const {app} = require('../src/api/server')
const {config,connectDB} = require('../config')

const {version} = config


before((done) => {
	connectDB()
    done()
})

after((done) => {
		mongoose.connection.close(() => done())
})

global.expect = chai.expect
global.request = request(app)
global.config = config
global.version = version
