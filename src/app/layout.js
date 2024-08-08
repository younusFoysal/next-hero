 import { Inter, Roboto } from "next/font/google";
import "./globals.css";
 import Navbar from "@/components/Navbar";
 import AuthProvider from "@/app/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ['400', '500', '900'], subsets: ["latin"] });

// write the keywords for SEO
// export const metadata = {
//   title: "Next Hero",
//   description: "Welcome to Next JS first App",
// };
 export const metadata = {
     title: {
         default: "Next Hero",
         template: " %s | Next Hero",
     },
     description: "Welcome to Next JS first App",
 };

export default function RootLayout({ children }) {
  return (
      <html lang="en" data-theme="light">
      {/*<body className={inter.className}>*/}
      <body className={roboto.className}>

      <AuthProvider>

      <Navbar></Navbar>
      <div className="">{children}</div>

      <footer className="bg-green-600 text-center ">
          This is Footer Page
      </footer>
      </AuthProvider>
      </body>
      </html>
  );
}
