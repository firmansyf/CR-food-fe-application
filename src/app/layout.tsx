import type { Metadata } from "next";
import {Quicksand} from 'next/font/google'
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ControllerProvider } from "@/context";
import { ToastContainer, } from 'react-toastify';
import NavbarComponent from "@/components/layout/navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cita Rasa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <ControllerProvider>
          <NavbarComponent />
          {children}
          <ToastContainer />
        </ControllerProvider>
      </body>
    </html>
  );
}
