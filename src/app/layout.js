import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import AuthProviders from "@/Services/AuthProviders";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repairing Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-100 text-slate-800`}
      >
         <Toaster 
         position="top-right"
         />
        <AuthProviders>
          <Navbar />
          <div className="min-h-screen ">
            {children}
          </div>
          <Footer />
        </AuthProviders>
      </body>

    </html >
  );
}
