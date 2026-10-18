import {neon} from "@neondatabase/serverless";
import {auth} from "./auth/server";
export const sql=neon(process.env.DATABASE_URL!);
export async function currentUser(){const result=await auth.getSession();return result.data?.user??null;}
export async function ensureProfile(user:{id:string;name?:string|null;email?:string|null}){const username="collector_"+user.id.replace(/[^a-zA-Z0-9]/g,"").slice(0,22).toLowerCase();await sql`INSERT INTO public.collectify_profiles(id,username,display_name) VALUES (${user.id},${username},${user.name||"Colecionador"}) ON CONFLICT (id) DO NOTHING`;return user.id;}
