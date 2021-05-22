import {Schema,model,Document} from 'mongoose'
export interface Idisco extends Document {
    title: string;
    artista: string;
    imagePath: string;
}

const discoSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true

    },
    artista:{
        type:String,
        trim:true

    },
    imagePath:{
        type:String,
        required:true,
        trim:true,
        unique:true

    }
},{
    versionKey:false,
    timestamps:true


})


export default model<Idisco>('Disco',discoSchema);