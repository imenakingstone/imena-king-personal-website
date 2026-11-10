import mongoose from 'mongoose';
const mediaItemSchema=new mongoose.Schema({
 title:{type:String,required:true,trim:true,maxlength:140},
 description:{type:String,default:'',maxlength:1200},
 kind:{type:String,enum:['link','image','youtube','video'],required:true},
 url:{type:String,required:true,trim:true},
 thumbnailUrl:{type:String,default:''},
 platform:{type:String,default:'',trim:true},
 caption:{type:String,default:'',maxlength:500},
 featured:{type:Boolean,default:false},
 published:{type:Boolean,default:false},
 sortOrder:{type:Number,default:0}
},{timestamps:true});
mediaItemSchema.index({published:1,sortOrder:1,createdAt:-1});
export default mongoose.model('MediaItem',mediaItemSchema);