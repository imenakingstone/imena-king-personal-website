import mongoose from 'mongoose';
const schema=new mongoose.Schema({
 mediaId:{type:String,required:true,unique:true},
 accountId:{type:mongoose.Schema.Types.ObjectId,ref:'InstagramAccount',required:true},
 caption:{type:String,default:''},
 mediaType:{type:String,default:'IMAGE'},
 mediaUrl:{type:String,default:''},
 thumbnailUrl:{type:String,default:''},
 permalink:{type:String,required:true},
 publishedAt:{type:Date,default:null},
 likeCount:{type:Number,default:0},
 commentsCount:{type:Number,default:0},
 isFeatured:{type:Boolean,default:false}
},{timestamps:true});
schema.index({accountId:1,publishedAt:-1});
export default mongoose.model('InstagramPost',schema);