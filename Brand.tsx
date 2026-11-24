import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
export default function Brand(){return <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-navy"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-navy text-white shadow-lg"><GraduationCap size={22}/></span><span className="text-xl">EDU<span className="text-coral">VORA</span></span></Link>}
