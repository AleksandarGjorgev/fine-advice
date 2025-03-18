import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Portfolio - Aleksandar Gjorgev",
  description: "Osebni portfolio za predstavitev veščin in projektov.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
