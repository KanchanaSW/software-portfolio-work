import Link from 'next/link';
import { Flower } from 'lucide-react';
import { siteData } from '@/constants/site-data';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      {/* <Link
        href={siteData.cta.floating.href}
        className="bg-primary text-white dark:bg-sage-green dark:text-primary px-6 py-3 rounded-full flex items-center space-x-4 shadow-2xl border border-white/10 cursor-pointer hover:scale-105 transition-transform"
      >
        <span className="text-xs font-bold uppercase tracking-widest">
          {siteData.cta.floating.text}
        </span>
        <span className="w-px h-4 bg-white/20 dark:bg-primary/20"></span>
        <Flower className="w-5 h-5" />
      </Link> */}
    </div>
  );
}
