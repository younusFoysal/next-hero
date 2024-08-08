import NextAuth from 'next-auth/next';
import connectDB from "@/lib/connectDB";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";




export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true, placeholder: "Your email address" },
                password: { label: "Password", type: "password", required: true, placeholder: "Enter Password" },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                const { email, password } = credentials;

                if (email) {
                    // const currentUser = users.find((user) => user.email === email);

                    const db = await connectDB()
                    const currentUser = await db.collection('users').findOne({ email });
                    console.log(currentUser)

                    if (currentUser && currentUser.password === password) {
                        return currentUser;
                    }
                }
                return null;
            },
        }),

        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),

        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
        }),

        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
        })
    ],


    callbacks : {


        async jwt({ token, account, user }) {
            if (account) {
                token.type = user.type
            }
            return token
        },

        async session({ session, token }) {
            session.user.type = token.type
            return session;
        },


    }


}



const handler = NextAuth(authOptions);

// const users = [
//     { id: 1, name: 'Robin', email: "robin@gmail.com", password: "robin", type: "admin", image: "https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png" },
//     { id: 2, name: "Alex", email: "alex@gmail.com", password: "alex",  type: "user", image: "https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"  },
// ];

export { handler as GET, handler as POST };
