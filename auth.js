import client from "./lib/db"
import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import ForwardEmail from "next-auth/providers/forwardemail"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [ForwardEmail],
})