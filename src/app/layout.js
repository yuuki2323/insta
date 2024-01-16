import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <Head>
        <title>insta-test</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
