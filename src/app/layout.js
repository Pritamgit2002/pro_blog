import Header from "@/components/header/page";
import "./globals.css";
import Footer from "@/components/footer/page";
import localFont from "next/font/local"

export const metadata = {
  title: "blog-aritra",
  description: "my personal blog",
};

const Chillax = localFont({ src: "../../public/fonts/Chillax-Regular.woff2"})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between" style={Chillax.style}>
        <div className="w-[65%]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
