'use client';

import Image from 'next/image';
import { Leaf, Users, Droplets, Sprout, Github, ExternalLink } from 'lucide-react';
import { ProjectCard as ProjectCardType } from '@/constants/site-data';
import Link from 'next/link';

interface ProjectCardProps {
  project: ProjectCardType;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  eco: Leaf,
  nature_people: Users,
  fluid: Droplets,
  energy_savings_leaf: Sprout,
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const getBackgroundColor = () => {
    if (project.backgroundColor) {
      if (project.backgroundColor.includes('/')) {
        const [color, opacity] = project.backgroundColor.split('/');
        return `bg-${color} dark:bg-${color}`;
      }
      return `bg-${project.backgroundColor}`;
    }
    return '';
  };

  const getTextColor = () => {
    if (project.textColor) {
      return `text-${project.textColor}`;
    }
    return '';
  };

  const aspectClass = 'aspect-square';
  const colSpanClass = 'col-span-1';
  const minHeightClass = '';

  // SYMBIOSIS_OS card
  if (project.id === 'symbiosis-os') {
    return (
      <div
        className={`group relative overflow-hidden rounded-xl bg-sage-green/20 dark:bg-charcoal ${aspectClass} flex flex-col justify-end p-8 border border-primary/5 dark:border-white/5 shadow-sm ${colSpanClass}`}
      >
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt || ''}
            fill
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal"
          />
        )}
        <div className="relative z-10">
          <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-terracotta">
            {project.subtitle}
          </p>
          <h3 className="text-3xl font-display font-bold leading-none mb-4 text-primary dark:text-white">
            {project.title}
          </h3>
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] border border-primary/20 dark:border-white/20 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-2 mt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 dark:bg-white/10 hover:bg-primary/20 dark:hover:bg-white/20 border border-primary/20 dark:border-white/20 rounded text-xs font-medium text-primary dark:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 dark:bg-white/10 hover:bg-primary/20 dark:hover:bg-white/20 border border-primary/20 dark:border-white/20 rounded text-xs font-medium text-primary dark:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ETHIC STACK card
  if (project.id === 'ethic-stack') {
    const IconComponent = project.iconName ? iconMap[project.iconName] : Leaf;
    return (
      <div
        className={`bg-sage-green p-10 rounded-xl flex flex-col justify-between ${aspectClass} ${colSpanClass}`}
      >
        <div className="text-primary">
          {IconComponent && <IconComponent className="text-4xl mb-4" />}
          <h2 className="text-6xl font-display font-black leading-[0.8] uppercase tracking-tighter">
            {project.title.split(' ').map((word, i) => (
              <span key={i}>
                {word}
                {i < project.title.split(' ').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>
        {project.textContent && (
          <div className="text-primary/80 font-mono text-sm leading-relaxed">
            {project.textContent.map((line, i) => (
              <span key={i}>
                {line}
                {i < project.textContent!.length - 1 && <br />}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  // NATURE IS THE ARCHITECT card
  if (project.id === 'nature-architect') {
    return (
      <div
        className={`bg-primary p-8 rounded-xl ${aspectClass} flex flex-col justify-between border border-white/10 overflow-hidden group ${colSpanClass}`}
      >
        <div className="space-y-3 font-mono text-xs overflow-hidden">
          <div className="flex space-x-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-terracotta"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-sage-green"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-earthy-brown"></div>
          </div>
          {project.codeContent?.map((line, i) => {
            if (line.startsWith('//')) {
              return (
                <p key={i} className="text-sage-green/40 italic">
                  {line}
                </p>
              );
            }
            if (line.includes('async function')) {
              return (
                <p key={i} className="text-sage-green">
                  async function <span className="text-white">nurtureGrowth</span>() {'{'}
                </p>
              );
            }
            if (line.includes('const') && line.includes('ecosystem')) {
              return (
                <p key={i} className="pl-4 text-white/80">
                  const <span className="text-terracotta">ecosystem</span> = await observe();
                </p>
              );
            }
            if (line.includes('return') && line.includes('ecosystem')) {
              return (
                <p key={i} className="pl-4 text-white/80">
                  return <span className="text-terracotta">ecosystem</span>.evolve((node) =&gt; ({'{'}
                </p>
              );
            }
            if (line.includes('...node')) {
              return (
                <p key={i} className="pl-8 text-white/80">
                  ...node,
                </p>
              );
            }
            if (line.includes("'regenerative'")) {
              return (
                <p key={i} className="pl-8 text-white/80">
                  impact: <span className="text-sage-green">'regenerative'</span>
                </p>
              );
            }
            if (line.includes('}))')) {
              return (
                <p key={i} className="pl-4 text-white/80">
                  {'}'}));
                </p>
              );
            }
            if (line.trim() === '}') {
              return (
                <p key={i} className="text-sage-green">
                  {'}'}
                </p>
              );
            }
            return (
              <p key={i} className="pl-4 text-white/80">
                {line}
              </p>
            );
          })}
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-display font-bold text-white uppercase italic">
            {project.title}
          </h4>
          <p className="text-white/50 text-xs mt-2 font-mono uppercase tracking-widest">
            {project.subtitle}
          </p>
        </div>
      </div>
    );
  }

  // MYCELIUM_NET card
  if (project.id === 'mycelium-net') {
    return (
      <div
        className={`bg-white dark:bg-charcoal p-1 rounded-xl ${aspectClass} relative overflow-hidden border border-primary/5 dark:border-white/5 ${colSpanClass}`}
      >
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt || ''}
            fill
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-8 flex flex-col justify-end">
          <h3 className="text-white text-2xl font-display font-bold">{project.title}</h3>
          <p className="text-white/60 text-xs uppercase tracking-widest mt-1">
            {project.subtitle}
          </p>
        </div>
      </div>
    );
  }

  // RE_ROOT_CMS card
  if (project.id === 'reroot-cms') {
    return (
      <div
        className={`${colSpanClass} bg-earthy-brown/10 dark:bg-zinc-800 rounded-xl overflow-hidden relative group ${minHeightClass}`}
      >
        <div className="absolute inset-0 p-12 flex items-center justify-center">
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.imageAlt || ''}
              fill
              className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-primary/80 to-transparent">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-terracotta text-[10px] font-bold tracking-widest uppercase">
                {project.subtitle}
              </span>
              <h3 className="text-3xl text-white font-display font-bold">{project.title}</h3>
            </div>
            <Link
              href="#"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-terracotta transition-colors group/btn"
            >
              <Sprout className="text-primary group-hover/btn:text-white w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // GROWING WITH PURPOSE card
  if (project.id === 'growing-purpose') {
    return (
      <div
        className={`bg-terracotta p-10 rounded-xl flex flex-col justify-between text-white ${colSpanClass}`}
      >
        <div className="text-5xl font-display font-black leading-none uppercase">
          {project.title.split(' ').map((word, i) => (
            <span key={i}>
              {word}
              {i < project.title.split(' ').length - 1 && <br />}
            </span>
          ))}
        </div>
        <div>
          {project.description && (
            <p className="text-sm font-medium leading-relaxed opacity-90">{project.description}</p>
          )}
          {project.iconNames && (
            <div className="mt-6 flex space-x-4">
              {project.iconNames.map((iconName) => {
                const IconComponent = iconMap[iconName] || Leaf;
                return <IconComponent key={iconName} className="w-6 h-6" />;
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // HUMUS_APP card
  if (project.id === 'humus-app') {
    return (
      <div
        className={`bg-white dark:bg-charcoal p-8 rounded-xl border border-primary/5 dark:border-white/5 overflow-hidden ${colSpanClass}`}
      >
        <div className="flex flex-col h-full items-center text-center">
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.imageAlt || ''}
              width={192}
              height={400}
              className="w-48 h-auto rounded-3xl shadow-xl mb-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          )}
          <h4 className="text-2xl font-display font-bold uppercase tracking-tight text-primary dark:text-white">
            {project.title}
          </h4>
          {project.tags && (
            <p className="text-xs text-primary/50 dark:text-white/40 font-mono mt-2">
              {project.tags.join(' • ')}
            </p>
          )}
        </div>
      </div>
    );
  }

  // HARMONIOUS SCALING card
  if (project.id === 'harmonious-scaling') {
    return (
      <div
        className={`relative rounded-xl overflow-hidden ${aspectClass} bg-primary ${colSpanClass}`}
      >
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt || ''}
            fill
            className="w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 border-2 border-terracotta rounded-full mb-6 flex items-center justify-center">
            <div className="w-8 h-8 bg-terracotta rounded-full animate-pulse"></div>
          </div>
          <h3 className="text-white text-3xl font-display font-bold italic">
            {project.title.split(' ').map((word, i) => (
              <span key={i}>
                {word}
                {i < project.title.split(' ').length - 1 && <br />}
              </span>
            ))}
          </h3>
        </div>
      </div>
    );
  }

  // Default fallback
  return null;
}
