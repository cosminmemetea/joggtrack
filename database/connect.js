const mongoose = require('mongoose')

module.exports = async () => {
    try{
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 1000,
          });
        console.log('Database connection suceed');
    }catch(err){
        console.log('Database connection error: ', err);
        throw new Error(err);
    }
  
}