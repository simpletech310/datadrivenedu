import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Data Driven Education | Compassionate ABA Therapy in Riverside',
  description:
    'Evidence-based ABA therapy with warm, family-centered care in Riverside and Desert Hot Springs. Track meaningful progress with BCBA-guided support.'
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Data Driven Education',
  telephone: '+1-951-000-0000',
  email: 'hello@datadrivenedu.com',
  areaServed: ['Riverside, CA', 'Desert Hot Springs, CA'],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'CA',
    addressCountry: 'US'
  }
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Data Driven Education',
  url: 'https://datadrivenedu.com',
  logo: 'https://datadrivenedu.com/logo.png'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </body>
    </html>
  );
}
