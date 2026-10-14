import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'SimulaBrasil - Portal de Simulados e Provas',
  description: 'Plataforma 100% gratuita de simulados interativos para o Ensino Fundamental e Médio (ENEM, OBMEP, Prova Paulista, SAEB, Fuvest, OBA) com gabarito comentado e modelo TRI.',
  openGraph: {
    title: 'SimulaBrasil - Portal de Simulados e Provas',
    description: 'Plataforma 100% gratuita de simulados interativos para o Ensino Fundamental e Médio com gabarito comentado.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimulaBrasil - Portal de Simulados e Provas',
    description: 'Plataforma de simulados interativos para o Ensino Fundamental e Médio.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="bg-[#FAF9FD] text-[#1A1B1E] font-sans antialiased selection:bg-[#D8E2FF] selection:text-[#001A41]">
        {children}
      </body>
    </html>
  );
}
