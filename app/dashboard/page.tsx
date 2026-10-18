import {redirect} from "next/navigation";
import {currentUser,ensureProfile,sql} from "../../lib/db";
import CollectionManager from "./ui";
export const dynamic="force-dynamic";
export default async function Dashboard(){const user=await currentUser();if(!user)redirect("/auth");await ensureProfile(user);const collections=await sql`SELECT id,name,description,visibility,created_at FROM public.collectify_collections WHERE owner_id=${user.id} ORDER BY created_at DESC`;return <CollectionManager name={user.name||user.email||"Colecionador"} collections={collections.map(c=>({id:String(c.id),name:String(c.name),description:String(c.description||""),visibility:String(c.visibility)}))}/>}
