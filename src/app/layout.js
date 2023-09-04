import Header from "@/components/header/page";
import "./globals.css";
import Footer from "@/components/footer/page";

export const metadata = {
  title: "blog-aritra",
  description: "my personal blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-[65%]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
