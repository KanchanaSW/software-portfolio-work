'use client';

import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { siteData } from '@/constants/site-data';

export default function ProjectGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const cards = gridRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => {
      card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(card);
    });

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div ref={gridRef} className="masonry-grid md:grid-cols-3 grid-cols-1">
      {siteData.projects.map((project) => (
        <div key={project.id} className="project-card w-full">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
