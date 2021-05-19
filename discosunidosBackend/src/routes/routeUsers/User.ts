import {Schema,model} from 'mongoose'


const userSchema=new Schema({
    fullname:{
        type:String,
        required:true,
        trim:true

    },
    username:{
        type:String,
        trim:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        trim:true,
      

    }
},{
    versionKey:false,
    timestamps:true


})


export default model('User',userSchema);