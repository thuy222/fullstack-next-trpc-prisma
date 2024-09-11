import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '~/styles/globals.css';
import { TrpcProvider } from '~/trpc/trpc-provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Restaurants',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrpcProvider>
          <div>{children}</div>
        </TrpcProvider>
      </body>
    </html>
  );
}
