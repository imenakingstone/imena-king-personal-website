import 'dotenv/config';
import { z } from 'zod';
const schema=z.object({
 NODE_ENV:z.enum(['development','test','production']).default('development'),
 PORT:z.coerce.number().int().positive().default(5000),
 CLIENT_ORIGIN:z.string().min(1).default('http://localhost:5173'),
 MONGODB_URI:z.string().min(1,'MONGODB_URI is required'),
 JWT_SECRET:z.string().min(32,'JWT_SECRET must contain at least 32 characters'),
 JWT_EXPIRES_IN:z.string().default('8h'),
 CLOUDINARY_CLOUD_NAME:z.string().optional(),
 CLOUDINARY_API_KEY:z.string().optional(),
 CLOUDINARY_API_SECRET:z.string().optional(),
 META_APP_ID:z.string().optional(),
 META_APP_SECRET:z.string().optional(),
 META_REDIRECT_URI:z.string().optional(),
 META_GRAPH_VERSION:z.string().optional(),
 TOKEN_ENCRYPTION_KEY:z.string().optional()
});
const parsed=schema.safeParse(process.env);
if(!parsed.success){console.error('Invalid server environment:',parsed.error.flatten().fieldErrors);process.exit(1);}
export const env=parsed.data;