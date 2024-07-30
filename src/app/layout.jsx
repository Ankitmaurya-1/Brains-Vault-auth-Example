import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brains Vault",
  description:
    "A Creative saas to store your ideas in one place using Brains Vault",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="container ">
            <div className="flex items-start justify-center min-h-screen ">
              <div className="mt-20">{children}</div>
            </div>
          </main>
       
        </body>
      </html>
    </ClerkProvider>
  );
}
