const express = require('express');
const router = express.Router({mergeParams:true});
const UserRepository = require('../../infra/repository/User')
const {post,get,delete_} = require('../controller/user')(UserRepository);


router.route('/')
      .get(get)
      .post(post);

router.route('/:username')
      .delete(delete_)

module.exports = router