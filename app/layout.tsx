import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home - VATSIM Indonesia vACC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
