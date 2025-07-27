import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import PageProgressBar from '@/components/progress-bar';

export const metadata: Metadata = {
  title: 'Rania Aliyaputri Santoso',
  description: 'A personal portfolio for Rania Aliyaputri Santoso, Architectural Engineering Graduate.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <PageProgressBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
