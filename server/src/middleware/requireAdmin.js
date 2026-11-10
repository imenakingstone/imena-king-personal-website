import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import { env } from '../config/env.js';
export async function requireAdmin(req,res,next){
 try{
  const header=req.headers.authorization||'';
  const token=header.startsWith('Bearer ')?header.slice(7):'';
  if(!token)return res.status(401).json({message:'Authentication required'});
  const payload=jwt.verify(token,env.JWT_SECRET);
  const admin=await Admin.findById(payload.sub).select('_id email role isActive');
  if(!admin||!admin.isActive)return res.status(401).json({message:'Admin session is no longer valid'});
  req.admin=admin;next();
 }catch(error){return res.status(401).json({message:'Invalid or expired session'});}
}