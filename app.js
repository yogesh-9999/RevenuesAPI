require('dotenv').config();
const express=require('express');
const app=express();
const  user=require('./routes/user')
const connectDB=require('./db/connect')


//middleware

app.use(express.json());


//routes

  
app.use('/users',user);

const port=3000;

const start =async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
          console.log(`Server is listening on port ${port}...`)
        );
      } catch (error) {
        console.log(error);
      }
}
start()