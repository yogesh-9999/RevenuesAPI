const mongoose=require('mongoose')
const revenueSchema= new mongoose.Schema({
    amount:{
        type:Number,
        require:true
    },
    dateRecieved:{
        type:Date,
        require:true
    }
})

module.exports=mongoose.model('Revenue',revenueSchema)