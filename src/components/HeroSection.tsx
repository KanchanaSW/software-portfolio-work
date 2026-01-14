import { siteData } from '@/constants/site-data';

export default function HeroSection() {
  return (
    <section className="mb-24 text-center">
      <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-display font-black leading-[0.9] tracking-tighter mb-12 max-w-5xl mx-auto uppercase">
        {siteData.hero.title}{' '}
        <span className="italic text-terracotta">{siteData.hero.titleHighlight}</span>
      </h1>
      <div className="flex justify-center space-x-4">
        {siteData.hero.badges.map((badge) => (
          <span
            key={badge}
            className="px-4 py-1 border border-primary/10 dark:border-white/10 rounded-full text-xs font-medium uppercase tracking-widest bg-white/50 dark:bg-white/5"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
