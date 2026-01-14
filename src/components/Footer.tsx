import Link from 'next/link';
import { siteData } from '@/constants/site-data';

export default function Footer() {
  return (
    <>
      <footer className="mt-32 pt-16 border-t border-primary/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-xl font-display font-black mb-6 uppercase text-primary dark:text-sage-green">
            {siteData.footer.brandName}
          </h2>
          <p className="max-w-xs text-sm text-primary/60 dark:text-white/60 leading-relaxed mb-8 font-medium">
            {siteData.footer.description}
          </p>
          <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest">
            {siteData.footer.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-terracotta transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[10px] font-bold tracking-widest uppercase text-primary/40 dark:text-white/40 mb-4">
            Inquiries
          </h3>
          <p className="text-sm font-semibold">{siteData.footer.inquiries.email}</p>
          <p className="text-sm font-semibold mt-2">{siteData.footer.inquiries.phone}</p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold tracking-widest uppercase text-primary/40 dark:text-white/40 mb-4">
            Garden
          </h3>
          <p className="text-sm font-semibold">
            {siteData.footer.garden.name}
            <br />
            {siteData.footer.garden.address}
            <br />
            {siteData.footer.garden.postcode}
          </p>
        </div>
      </footer>
      <div className="mt-20 pb-10 flex justify-between items-center">
        <p className="text-[10px] uppercase font-bold tracking-tighter opacity-30">
          {siteData.footer.copyright}
        </p>
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 rounded-full bg-sage-green"></div>
          <span className="text-[10px] uppercase font-bold tracking-tighter opacity-50">
            {siteData.footer.status}
          </span>
        </div>
      </div>
    </>
  );
}
