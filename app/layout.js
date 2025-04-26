import "./globals.css";
import {Inter} from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Finance Tracker",
  description: "A finance tracker app",
};

const year = new Date().getFullYear();

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
        {/* header */}
        <Header />
        <main className="min-h-screen" >
        {children}
        </main>
        <Toaster richColors />
        {/* footer */}
        <footer className="bg-blue-50 py-12 ">
          <div className="container mx-auto px-4 text-gray-600 text-center">
            <p>&copy; {year} Finance Tracker. All rights reserved.</p>
          </div>
        </footer>
        {/* footer */}
      </body>
    </html>
    </ClerkProvider>
  );
}
