const express =require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('server is running  up and down');

})
module.exports= router;