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
    title: 'Bio_Logic | Natural & Organic Tech Portfolio',
    brandName: 'BIO_LOGIC',
    tagline: 'Designing digital ecosystems with a focus on ecological sustainability and human dignity.',
  },
  navigation: [
    { label: 'Ecosystem', href: '#' },
    { label: 'Ethics', href: '#' },
    { label: 'About', href: '#' },
  ] as NavigationLink[],
  hero: {
    title: 'MY',
    titleHighlight: 'WORK',
    badges: ['Regenerative Design', 'Sustainability First'],
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
    },
    {
      id: 'ethic-stack',
      title: 'ETHIC STACK',
      iconName: 'eco',
      textContent: [
        'Green Hosting',
        'Low-Carbon CSS',
        'Solar Powered API',
        'Circular Logic',
        'Privacy Core',
      ],
      type: 'text',
      backgroundColor: 'sage-green',
      aspectRatio: 'square',
    },
    {
      id: 'nature-architect',
      title: 'Nature is the architect.',
      subtitle: 'Efficiency through biomimicry',
      codeContent: [
        '// Planting sustainable logic',
        'async function nurtureGrowth() {',
        '  const ecosystem = await observe();',
        '  return ecosystem.evolve((node) => ({',
        '    ...node,',
        "    impact: 'regenerative'",
        '  }));',
        '}',
      ],
      type: 'code',
      backgroundColor: 'primary',
      aspectRatio: '4/5',
    },
    {
      id: 'mycelium-net',
      title: 'MYCELIUM_NET',
      subtitle: 'Decentralized Data Growth',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBahavPE2drh8tG0Bzd5QmAWKDXWCIEscAj3ZpOggj7sVARe96JWWeTYVUENO9HIBtqszdRPm3iVNQXrfhVWCq1Zcw7GIYqCgKgtCfECC3YT6kvCJfSbYsGC2vQfG8s6MoKaUi9i1fAvPFv9UINbEGQuAP59IZN6UGkpUemXa_3cCrXQcXhx5D7e5eJTlwStSbWLCpJ7hGO0NFT2DtyTN4Mt3gaStHsSptx7A6k4zIuW7pXgen9EqVCfTMTTYdocnt0w-ewpuDcUXE',
      imageAlt: 'Data visualization depicted as growing root structures',
      type: 'image',
      backgroundColor: 'white',
      aspectRatio: 'square',
    },
    {
      id: 'reroot-cms',
      title: 'RE_ROOT_CMS',
      subtitle: 'Sustainable Case Study',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQdPDXB7ZTWI_2yQ0Z5223uCCW7rgPdk0S80DmdHwsWDB0UXJpkxhfdEYQ2hrNNCRfH45oh6i_qufgRE_4LsD1IiP_oKZMau9Gv9zU_ppVm-KbAHH246QZ0UVEQJmZN8KBnuyqDzj4negt-ZJnwz8xpY_XBt-1541s-XyRxJu0rn9gdWMrslqJwLfK961k9URZGzon7J0odqOY_wo2dlBCpduUZOO0IRoR_iwf--czr8MIpZGMty16zHQaSBUnL6mTDqcdSckOH5c',
      imageAlt: 'Circuit patterns resembling leaf veins',
      type: 'image',
      backgroundColor: 'earthy-brown/10',
      colSpan: 2,
      minHeight: '400px',
    },
    {
      id: 'growing-purpose',
      title: 'GROWING WITH PURPOSE',
      description: 'Senior Systems Architect focused on low-carbon computing and human-centered design. I build digital tools that respect biological boundaries and user autonomy.',
      iconNames: ['nature_people', 'fluid', 'energy_savings_leaf'],
      type: 'feature',
      backgroundColor: 'terracotta',
      textColor: 'white',
    },
    {
      id: 'humus-app',
      title: 'HUMUS_APP',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-OesvBkSy815yzVim5JfJSzrHAzJzUCKKOfbTN1NDjrmSMHyH-F3wcEZVWPHYe2TS8Xt5EzbFQLgfPmPzAqwwh3o1aglYKNPtVNLuCGcvAzUX8IHV_bztPKOoX8Jnx9a73_SrIBoupwG9JFdtZTarCGAG5F5UuGnQfq8V5KuLyH6O8GliKHOdCBMwKmT0LrKwI_GePbaecfUmtBZNzH1EFp625p2owR8NXsH2N2rZ7Zm517laK5fmLy6fWf22zwrULSw44_MQKsM',
      imageAlt: 'Organic UI patterns on mobile',
      tags: ['Flutter', 'Local-First', 'Ethical AI'],
      type: 'image',
      backgroundColor: 'white',
    },
    {
      id: 'harmonious-scaling',
      title: 'HARMONIOUS SCALING.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjeFJAM7fiIHjCeFNRXOHkR1yJVJ9pdty8LIk0_cNPxtPATKkSYArB8XgypoyTDbHI-HggJinDvnTsiB7r3eR40SmPJGr_6LXna8aZtnWC03eDFwwqAA1nF22IMOvPARWf8Xg42Ex6EgfFQeR5o63enN84TZoKIGbUqaNY987ENfQpNFm-JEW8fC8q1Gmr2Oi0q6NHjw1pAblj0pPSwsrIYi8Yygqzgy1hoqpJpf072WrKEXuiJluqYQVR3fQhg-WpiXlN47NxuIo',
      imageAlt: 'Data visualizations as forest canopy structures',
      type: 'image',
      backgroundColor: 'primary',
      aspectRatio: '4/5',
    },
  ] as ProjectCard[],
  footer: {
    brandName: 'Bio_Logic',
    description: 'Designing digital ecosystems with a focus on ecological sustainability and human dignity.',
    socialLinks: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Substack', href: '#' },
    ] as SocialLink[],
    inquiries: {
      email: 'hello@biologic.tech',
      phone: '+44 (0) 7700 900000',
    },
    garden: {
      name: 'The Greenhouse Studio',
      address: 'Kew Gardens, London',
      postcode: 'TW9 3AE',
    },
    copyright: '© 2024 BIO_LOGIC STUDIO. REGENERATIVE BY DESIGN.',
    status: 'Operational Status: Carbon Neutral',
  },
  cta: {
    floating: {
      text: 'Start a project',
      href: '#',
    },
    header: {
      text: 'PLANT A SEED',
      href: '#',
    },
  },
} as const;
