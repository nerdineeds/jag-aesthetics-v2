import type { Metadata } from 'next';
import './globals.css';
import './embla.css';
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title:
    'JAG Aesthetic Digital | Aesthetic Web Design & Technical Solutions for Stunning Online Presence',
  description:
    'JAG Aesthetic Digital delivers cutting-edge aesthetic web design and technical solutions to elevate your brand. From bespoke website development to innovative digital strategies, we craft visually striking and high-performing online experiences. Partner with us to enhance your digital presence today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ESBBCJF16N"
          strategy="afterInteractive" // Ensures the script runs after page load
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ESBBCJF16N');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <MainNavigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
