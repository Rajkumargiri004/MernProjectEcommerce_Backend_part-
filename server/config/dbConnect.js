const mongoose = require('mongoose')
mongoose.set('strictQuery', true);


const dbConnect =()=>{
    try{
        const conn = mongoose.connect(process.env.db_url);
        console.log('db connected')
    }catch (err) {
        console.log('db not connected')
    }
}
module.exports = dbConnect