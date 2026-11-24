import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
const jakarta = Plus_Jakarta_Sans({ subsets:['latin'], variable:'--font-jakarta' });
export const metadata: Metadata = { title:'EDUVORA — Learn, Play, Compete', description:'A learning universe where lessons become adventures.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id"><body className={jakarta.variable}>{children}</body></html>; }
