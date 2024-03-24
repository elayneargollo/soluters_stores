import NextAuth from "next-auth"
import { UserType } from "./user"

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string | undefined,
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserType & DefaultSession['user'],
    access_token: string | undefined,
  } 
}