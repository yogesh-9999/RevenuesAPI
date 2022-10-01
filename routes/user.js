const express=require('express')
const router=express.Router();

const {getUser}=require('../controllers/Users')

router.route('/').get(getUser);

module.exports=router