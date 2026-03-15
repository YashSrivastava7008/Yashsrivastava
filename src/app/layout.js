import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "../components/ui/Footer/Footer";
import AIChatbot from "../components/ui/AIChatbot/AIChatbot";
import ScrollToTop from "../components/ui/ScrollToTop/ScrollToTop";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: {
    template: '%s | Yash Srivastava',
    default: 'Yash Srivastava | UI/UX Designer',
  },
  description: 'Portfolio of Yash Srivastava, a Product Designer specializing in Web, App, and Motion Design. Creating intuitive and visually engaging digital experiences.',
  keywords: ['UI Designer', 'UX Designer', 'Product Design', 'Web Design', 'React', 'Next.js', 'Framer Motion'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yashsrivastava.design',
    siteName: 'Yash Srivastava Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Yash Srivastava Portfolio',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://t.contentsquare.net/uxa/f9a941e68d4ba.js" async></script>
      </head>
      <body className={`${inter.variable} ${bebas.variable}`} suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <AIChatbot />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html >
  );
}

