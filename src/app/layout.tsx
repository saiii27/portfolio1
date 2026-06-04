import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Saiprasad B. Jarkiholi -- Computer Science & AI Student',
  description: 'Personal portfolio of Saiprasad B. Jarkiholi, a Computer Science and Engineering (Artificial Intelligence) student at KLE Technological University, Hubballi.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased bg-[#0C0C0C]`}>
        {children}
      </body>
    </html>
  );
}
