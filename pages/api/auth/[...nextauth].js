import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  //Customizing
  //   theme: {
  //     colorScheme: auto,
  //     logo: "https://links.papareact.com/sq0",
  //     brandColor: "#F13287",
  //   },
  pages: {
    signIn: "/auth/signin",
  },
  // callbacks: {
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     user && (token.user = user);
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     session = {
  //       ...session,
  //       user: {
  //         id: user.id,
  //         ...session.user,
  //       },
  //     };
  //     return session;
  //   },
  // },
});
