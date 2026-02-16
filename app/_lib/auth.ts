import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByUsername } from "./data-service";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import client from "./service/db";
// import { authConfig } from "./auth.config";
// import { getUserByUsernameVerSec } from "./actions/userDataActions";
// import { getUserByUsernameVerSec } from "./service/user";

export const {handlers, signIn, signOut, auth} = NextAuth({
    // adapter: MongoDBAdapter(client),
    session: {strategy: "jwt"},
    // ...authConfig,
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async(credentials): Promise<any> =>{
                const username: string | unknown = credentials.username
                const user = await getUserByUsername(username.toLowerCase())
                console.log("user:", user);
                if(!user || !user.password) return null

                // if(credentials.password===user.password) return user // ko bomo imeli persistant sessions
                return user
            }
        })
    ]
})