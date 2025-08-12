import './globals.css';
import Navbar from '@/components/Navbar';
import TopBar from "@/components/TopBar";
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
