const Users=require('../models/Users')
const Revenue=require('../models/Revenue')


const getUsers=async(req,res)=>{
    try {
        const user=await  Revenue.get({ $year: { date: new Date("Jan 1, 2022") } });
        res.status(201).json({noOfUsers:user});
    
     console.log('success3');

    }catch (error) {
        console.log(error)
    }
   
}

module.exports={getUsers}