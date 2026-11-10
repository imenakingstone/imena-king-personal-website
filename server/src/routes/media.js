import { Router } from 'express';
import { z } from 'zod';
import MediaItem from '../models/MediaItem.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
const router=Router();
const itemSchema=z.object({
 title:z.string().trim().min(1).max(140),description:z.string().max(1200).optional().default(''),
 kind:z.enum(['link','image','youtube','video']),url:z.string().url(),thumbnailUrl:z.string().url().or(z.literal('')).optional().default(''),
 platform:z.string().max(50).optional().default(''),caption:z.string().max(500).optional().default(''),
 featured:z.boolean().optional().default(false),published:z.boolean().optional().default(false),sortOrder:z.number().int().optional().default(0)
});
router.get('/',async(req,res,next)=>{try{const items=await MediaItem.find({published:true}).sort({sortOrder:1,createdAt:-1}).lean();res.json({items});}catch(e){next(e);}});
router.get('/manage',requireAdmin,async(req,res,next)=>{try{const items=await MediaItem.find().sort({sortOrder:1,createdAt:-1}).lean();res.json({items});}catch(e){next(e);}});
router.post('/',requireAdmin,async(req,res,next)=>{try{const parsed=itemSchema.safeParse(req.body);if(!parsed.success)return res.status(400).json({message:'Invalid media item',errors:parsed.error.flatten()});const item=await MediaItem.create(parsed.data);res.status(201).json({item});}catch(e){next(e);}});
router.patch('/:id',requireAdmin,async(req,res,next)=>{try{const parsed=itemSchema.partial().safeParse(req.body);if(!parsed.success)return res.status(400).json({message:'Invalid media item',errors:parsed.error.flatten()});const item=await MediaItem.findByIdAndUpdate(req.params.id,parsed.data,{new:true,runValidators:true});if(!item)return res.status(404).json({message:'Media item not found'});res.json({item});}catch(e){next(e);}});
router.delete('/:id',requireAdmin,async(req,res,next)=>{try{const item=await MediaItem.findByIdAndDelete(req.params.id);if(!item)return res.status(404).json({message:'Media item not found'});res.status(204).end();}catch(e){next(e);}});
export default router;