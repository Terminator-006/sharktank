import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../lib/theme-context';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Virtual Shark Tank - ICICI Bank Innovation',
  description: 'A digital startup pitching platform powered by AI. Pitch. Score. Invest.',
  keywords: ['startup', 'investment', 'pitch', 'ICICI Bank', 'innovation'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
