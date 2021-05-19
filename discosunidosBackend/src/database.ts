
/*
import mongoose, { ConnectOptions } from 'mongoose'

(async ()=>{
const mongooseOptions:ConnectOptions={
    try{
        const mongooseOptions:ConnectionOptions={
            useUnifiedTopology:true,
            useNewUrlParser:true,
        }
        const db=await mongoose.connect('mongodb@admi//localhost/discos-database',mongooseOptions);
        
            console.log('database is connected to: ',db.connection.name)
}catch(error){
    console.log(error)
}

})()
*/



import mongoose, { ConnectionOptions } from "mongoose";
import config from './config'

(async () => {

    try {
        const mongooseOptions: ConnectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            /*
            user:config.MONGO_USER,
            pass:config.MONGO_PASSWORD
            */
          };
    
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
        console.log("Database is connected to: ", db.connection.name);
    } catch (error) {
        console.log(error)
        
    }
})()