/**
 * Site data extracted from HTML
 * All text content, image URLs, and links
 */

export interface ProjectCard {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  tags?: string[];
  type: 'image' | 'code' | 'text' | 'feature';
  backgroundColor?: string;
  textColor?: string;
  aspectRatio?: string;
  colSpan?: number;
  minHeight?: string;
  codeContent?: string[];
  textContent?: string[];
  iconName?: string;
  iconNames?: string[];
  githubUrl?: string | null;
  liveDemoUrl?: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const siteData = {
  site: {
    title: 'Kanchana Walagambahu | Portfolio',
    brandName: 'KANCHANA',
    tagline: 'Software Engineer - Frontend',
  },
  navigation: [
    { label: 'Ecosystem', href: '#' },
    { label: 'Ethics', href: '#' },
    { label: 'About', href: '#' },
  ] as NavigationLink[],
  hero: {
    title: 'MY',
      titleHighlight: 'WORK',
      badges: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  projects: [
    {
      id: 'symbiosis-os',
      title: 'SYMBIOSIS_OS',
      subtitle: 'Ethical AI Interface',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkd4KRTMIcRGCVox3Mx_j-N73qAQCCfIt_idIgv_LL9wNJeqnQWHjDD3K2VVJuf4Qz3b3GrOAAdeeCQfYciJkq2KaFe3RdIIMlkQASOz9Jtd8kRNr2WJmQ3_WDvqWY_720owt_9KjXfgeButO1TQ8GiJcs5d8moaelvKKIWKkbDHBMinEGIGv2X4b9YPNJJT0pZVaX7auxSbLRk6YG_Nux4QU707AEe3uX8kFTMMqv_mTR2Xu0qCyXJokUo2FVlUaD31AFXJnJotY',
      imageAlt: 'Technology integrated with mossy stone texture',
      tags: ['Rust', 'Wasm'],
      type: 'image',
      backgroundColor: 'sage-green/20',
      aspectRatio: '4/5',
      githubUrl: 'https://example.com',
      liveDemoUrl: 'https://example.com',
    },
    {
      id: 'symbiosis-os',
      title: 'SYMBIOSIS_OS',
      subtitle: 'Ethical AI Interface',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkd4KRTMIcRGCVox3Mx_j-N73qAQCCfIt_idIgv_LL9wNJeqnQWHjDD3K2VVJuf4Qz3b3GrOAAdeeCQfYciJkq2KaFe3RdIIMlkQASOz9Jtd8kRNr2WJmQ3_WDvqWY_720owt_9KjXfgeButO1TQ8GiJcs5d8moaelvKKIWKkbDHBMinEGIGv2X4b9YPNJJT0pZVaX7auxSbLRk6YG_Nux4QU707AEe3uX8kFTMMqv_mTR2Xu0qCyXJokUo2FVlUaD31AFXJnJotY',
      imageAlt: 'Technology integrated with mossy stone texture',
      tags: ['Rust', 'Wasm'],
      type: 'image',
      backgroundColor: 'sage-green/20',
      aspectRatio: '4/5',
      githubUrl: 'https://example.com',
      liveDemoUrl: 'https://example.com',
    },
    {
      id: 'symbiosis-os',
      title: 'SYMBIOSIS_OS',
      subtitle: 'Ethical AI Interface',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkd4KRTMIcRGCVox3Mx_j-N73qAQCCfIt_idIgv_LL9wNJeqnQWHjDD3K2VVJuf4Qz3b3GrOAAdeeCQfYciJkq2KaFe3RdIIMlkQASOz9Jtd8kRNr2WJmQ3_WDvqWY_720owt_9KjXfgeButO1TQ8GiJcs5d8moaelvKKIWKkbDHBMinEGIGv2X4b9YPNJJT0pZVaX7auxSbLRk6YG_Nux4QU707AEe3uX8kFTMMqv_mTR2Xu0qCyXJokUo2FVlUaD31AFXJnJotY',
      imageAlt: 'Technology integrated with mossy stone texture',
      tags: ['Rust', 'Wasm'],
      type: 'image',
      backgroundColor: 'sage-green/20',
      aspectRatio: '4/5',
      githubUrl: 'https://example.com',
      liveDemoUrl: 'https://example.com',
    },
    {
      id: 'symbiosis-os',
      title: 'SYMBIOSIS_OS',
      subtitle: 'Ethical AI Interface',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkd4KRTMIcRGCVox3Mx_j-N73qAQCCfIt_idIgv_LL9wNJeqnQWHjDD3K2VVJuf4Qz3b3GrOAAdeeCQfYciJkq2KaFe3RdIIMlkQASOz9Jtd8kRNr2WJmQ3_WDvqWY_720owt_9KjXfgeButO1TQ8GiJcs5d8moaelvKKIWKkbDHBMinEGIGv2X4b9YPNJJT0pZVaX7auxSbLRk6YG_Nux4QU707AEe3uX8kFTMMqv_mTR2Xu0qCyXJokUo2FVlUaD31AFXJnJotY',
      imageAlt: 'Technology integrated with mossy stone texture',
      tags: ['Rust', 'Wasm'],
      type: 'image',
      backgroundColor: 'sage-green/20',
      aspectRatio: '4/5',
      githubUrl: 'https://example.com',
      liveDemoUrl: 'https://example.com',
    },
    {
      id: 'symbiosis-os',
      title: 'SYMBIOSIS_OS',
      subtitle: 'Ethical AI Interface',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkd4KRTMIcRGCVox3Mx_j-N73qAQCCfIt_idIgv_LL9wNJeqnQWHjDD3K2VVJuf4Qz3b3GrOAAdeeCQfYciJkq2KaFe3RdIIMlkQASOz9Jtd8kRNr2WJmQ3_WDvqWY_720owt_9KjXfgeButO1TQ8GiJcs5d8moaelvKKIWKkbDHBMinEGIGv2X4b9YPNJJT0pZVaX7auxSbLRk6YG_Nux4QU707AEe3uX8kFTMMqv_mTR2Xu0qCyXJokUo2FVlUaD31AFXJnJotY',
      imageAlt: 'Technology integrated with mossy stone texture',
      tags: ['Rust', 'Wasm'],
      type: 'image',
      backgroundColor: 'sage-green/20',
      aspectRatio: '4/5',
      githubUrl: 'https://example.com',
      liveDemoUrl: 'https://example.com',
    },
    {
      id: 'symbiosis-os',
      title: 'SYMBIOSIS_OS',
      subtitle: 'Ethical AI Interface',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkd4KRTMIcRGCVox3Mx_j-N73qAQCCfIt_idIgv_LL9wNJeqnQWHjDD3K2VVJuf4Qz3b3GrOAAdeeCQfYciJkq2KaFe3RdIIMlkQASOz9Jtd8kRNr2WJmQ3_WDvqWY_720owt_9KjXfgeButO1TQ8GiJcs5d8moaelvKKIWKkbDHBMinEGIGv2X4b9YPNJJT0pZVaX7auxSbLRk6YG_Nux4QU707AEe3uX8kFTMMqv_mTR2Xu0qCyXJokUo2FVlUaD31AFXJnJotY',
      imageAlt: 'Technology integrated with mossy stone texture',
      tags: ['Rust', 'Wasm'],
      type: 'image',
      backgroundColor: 'sage-green/20',
      aspectRatio: '4/5',
      githubUrl: 'https://example.com',
      liveDemoUrl: 'https://example.com',
    },

  ] as ProjectCard[],
  footer: {
    brandName: 'Kanchana',
    description: 'Software Engineer - Frontend',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/KanchanaSW' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/connectskw/' },
    ] as SocialLink[],
    inquiries: {
      email: 'sachithrakanchana.k@gmail.com',
      phone: '+94 77 155 68 15',
    },
    copyright: '© 2026 Kanchana Walagambahu. All rights reserved .',
    status: 'Operational Status: Carbon Neutral',
  },
} as const;
