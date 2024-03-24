import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Suspense } from "react";
import Loading from "./loading";
import NextAuthProvider from "./providers/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soluter Store",
  description: "Loja de produtos digitais da Solutis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID!}>
            <Header />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </GoogleOAuthProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
