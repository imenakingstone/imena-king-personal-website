import {Router} from 'express';
import {v2 as cloudinary} from 'cloudinary';
import {requireAdmin} from '../middleware/requireAdmin.js';
const router=Router();
router.post('/signature',requireAdmin,(req,res)=>{
 const {CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET}=process.env;
 if(!CLOUDINARY_CLOUD_NAME||!CLOUDINARY_API_KEY||!CLOUDINARY_API_SECRET)return res.status(503).json({message:'Image storage is not configured yet'});
 const timestamp=Math.floor(Date.now()/1000);
 const folder='imena-king/media-kit';
 const signature=cloudinary.utils.api_sign_request({timestamp,folder},CLOUDINARY_API_SECRET);
 res.json({cloudName:CLOUDINARY_CLOUD_NAME,apiKey:CLOUDINARY_API_KEY,timestamp,folder,signature});
});
export default router;