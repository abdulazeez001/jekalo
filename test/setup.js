const chai = require('chai');
const request = require('supertest');

const {app} = require('../src/api/server')
const {config} = require('../config')

const {version} = config

global.expect = chai.expect
global.request = request(app)
global.config = config
global.version = version
