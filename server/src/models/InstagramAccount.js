import mongoose from 'mongoose';
const schema=new mongoose.Schema({
 instagramUserId:{type:String,required:true,unique:true},
 username:{type:String,required:true},
 name:{type:String,default:''},
 accountType:{type:String,default:''},
 profilePictureUrl:{type:String,default:''},
 followersCount:{type:Number,default:0},
 mediaCount:{type:Number,default:0},
 encryptedToken:{type:String,required:true,select:false},
 tokenIv:{type:String,required:true,select:false},
 tokenAuthTag:{type:String,required:true,select:false},
 tokenExpiresAt:{type:Date,required:true},
 isSelected:{type:Boolean,default:true}
},{timestamps:true});
schema.index({isSelected:1});
export default mongoose.model('InstagramAccount',schema);