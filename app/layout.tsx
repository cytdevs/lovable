import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Nossa Toca Pousada | Barra do Jucu — Vila Velha/ES', description: 'Conheça a Nossa Toca, pousada acolhedora na Barra do Jucu, em Vila Velha/ES. Consulte disponibilidade pelo WhatsApp.', openGraph: { title: 'Nossa Toca — Seu refúgio na Barra do Jucu', description: 'Praia, descanso e vivências no litoral capixaba.', type: 'website', locale: 'pt_BR', images: ['/og.png'] }, twitter: { card: 'summary_large_image', title: 'Nossa Toca — Seu refúgio na Barra do Jucu', description: 'Praia, descanso e vivências no litoral capixaba.', images: ['/og.png'] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }

