import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';
import { Scanlines } from '@/components/layout/Scanlines';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Catherine Lin — Full-Stack Engineer',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Scanlines />
          <Navbar />
          <main className="min-h-screen">
          {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}