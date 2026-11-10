import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import Admin from '../models/Admin.js';
import { env } from '../config/env.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
const router=Router();
const loginSchema=z.object({email:z.string().email().max(254),password:z.string().min(1).max(200)});
router.post('/login',async(req,res,next)=>{
 try{
  const parsed=loginSchema.safeParse(req.body);
  if(!parsed.success)return res.status(400).json({message:'Enter a valid email and password'});
  const email=parsed.data.email.toLowerCase().trim();
  const admin=await Admin.findOne({email}).select('+passwordHash');
  if(!admin||!admin.isActive||!(await bcrypt.compare(parsed.data.password,admin.passwordHash)))return res.status(401).json({message:'Email or password is incorrect'});
  admin.lastLoginAt=new Date();await admin.save();
  const token=jwt.sign({sub:admin.id,role:admin.role},env.JWT_SECRET,{expiresIn:env.JWT_EXPIRES_IN});
  res.json({token,admin:{id:admin.id,email:admin.email,role:admin.role},expiresIn:env.JWT_EXPIRES_IN});
 }catch(error){next(error);}
});
router.get('/me',requireAdmin,(req,res)=>res.json({admin:{id:req.admin.id,email:req.admin.email,role:req.admin.role}}));
export default router;