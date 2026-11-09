import type { Metadata } from 'next';
import 'modern-normalize/modern-normalize.css';
import './globals.css';

import { Montserrat, Sora, Nunito_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import TanstackProvider from '@/components/TanStackProvider/TanStackProvider';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import Header from '@/components/Header/Header';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const nunito = Nunito_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Природні мандри',
  description: 'Відкрий Україну заново — еко-мандри для натхнення',
  openGraph: {
    type: 'website',
    title: 'Природні мандри',
    description: 'Відкрий Україну заново — еко-мандри для натхнення',
    url: 'https://green-tourism-frontend.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning
      className={`${sora.variable} ${montserrat.variable} ${nunito.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "(function(){var key='green-tourism-theme';var media=window.matchMedia('(prefers-color-scheme: dark)');var saved=null;try{saved=localStorage.getItem(key)}catch(e){}var chosen=saved==='dark'||saved==='light';function apply(theme){document.documentElement.dataset.theme=theme}apply(chosen?saved:(media.matches?'dark':'light'));media.addEventListener('change',function(e){var current=null;try{current=localStorage.getItem(key)}catch(err){}if(current!=='dark'&&current!=='light')apply(e.matches?'dark':'light')});window.addEventListener('storage',function(e){if(e.key===key||e.key===null)apply(e.newValue==='dark'||e.newValue==='light'?e.newValue:(media.matches?'dark':'light'))})})();" }} />
      </head>
      <body>
        <TanstackProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </TanstackProvider>

        <Toaster position="top-center" />
      </body>
    </html>
  );
}
