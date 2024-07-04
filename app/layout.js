"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Provider } from "react-redux";
import store from "@/utils/store";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
    </Provider>
  );
}
