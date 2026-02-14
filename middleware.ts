// import NextAuth from "next-auth";
import { auth } from "@/app/_lib/auth";

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    // const isLoggedIn = true;
    console.log("ROUTE:", req.nextUrl.pathname);
    console.log("IS LOGGED IN:", isLoggedIn);

    const isLoginPage = nextUrl.pathname.startsWith("/auth/login");
    // const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    // const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    // const isAuthRoute = nextUrl.pathname === "/";

    // if(nextUrl.pathname === "/") {
    //     return Response.redirect(new URL("/auth/login", nextUrl));
    // }

    if (isLoginPage) {
        return null;
    }

    if (!isLoggedIn) {
        return Response.redirect(new URL("/auth/login", nextUrl));
    }

    // if (isAuthRoute) {
    //     if (isLoggedIn)
    //         return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    //     return null;
    // }

    return null;
});

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // "/"
    ], // karkoli je v tej routi, bo invokal middleware (auth fukcijo v tem primeru)
};
