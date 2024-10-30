import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { RootLayoutProvider } from '@/components/providers/root-layout-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TradeHub - Modern Barter Trading Platform',
  description: 'Exchange goods and services in a trusted community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <RootLayoutProvider>{children}</RootLayoutProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}