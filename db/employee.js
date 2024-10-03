const mongoose=require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('connection established');
}).catch((error) => {
    console.log('error in connection',error.message);
})