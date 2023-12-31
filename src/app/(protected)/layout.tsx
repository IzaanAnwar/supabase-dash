import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <Sidebar />
            <div className="w-full">
              <Navbar />
              <section>{children}</section>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
