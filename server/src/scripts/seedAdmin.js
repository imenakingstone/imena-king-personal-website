import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';
const {MONGODB_URI,ADMIN_EMAIL,ADMIN_PASSWORD}=process.env;
if(!MONGODB_URI||!ADMIN_EMAIL||!ADMIN_PASSWORD){console.error('Set MONGODB_URI, ADMIN_EMAIL and ADMIN_PASSWORD in server/.env first.');process.exit(1);}
if(ADMIN_PASSWORD.length<14){console.error('ADMIN_PASSWORD must be at least 14 characters.');process.exit(1);}
await mongoose.connect(MONGODB_URI);
const email=ADMIN_EMAIL.toLowerCase().trim();
const passwordHash=await bcrypt.hash(ADMIN_PASSWORD,12);
await Admin.findOneAndUpdate({email},{email,passwordHash,role:'admin',isActive:true},{upsert:true,new:true,runValidators:true});
console.log('Admin account created or updated for '+email);
await mongoose.disconnect();