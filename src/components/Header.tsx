'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteData } from '@/constants/site-data';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="text-xl font-display font-black tracking-tighter text-primary dark:text-sage-green">
        {siteData.site.brandName}
        <span className="text-terracotta">.</span>
      </div>
      <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase">
        {siteData.navigation.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hover:text-terracotta transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <button
          className="p-2 bg-moss-green text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle dark mode"
        >
          {mounted && theme === 'dark' ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
        <Link
          href={siteData.cta.header.href}
          className="bg-primary text-white dark:bg-sage-green dark:text-primary px-6 py-2.5 rounded-full text-xs font-bold hover:scale-105 transition-transform"
        >
          {siteData.cta.header.text}
        </Link>
      </nav>
    </header>
  );
}
