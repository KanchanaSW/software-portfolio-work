import { getProjects } from '@/lib/projects';
import ProjectGridClient from './ProjectGridClient';

export default async function ProjectGrid() {
  try {
    const projects = await getProjects();

    if (projects.length === 0) {
      return (
        <div className="text-center py-12 text-primary/60 dark:text-white/60">
          <p>No projects found. Add projects to your Supabase database to see them here.</p>
        </div>
      );
    }

    return <ProjectGridClient projects={projects} />;
  } catch (error) {
    return (
      <div className="text-center py-12 text-primary/60 dark:text-white/60">
        <p>Unable to load projects. Please check your Supabase configuration.</p>
        {process.env.NODE_ENV === 'development' && (
          <p className="text-xs mt-2 text-primary/40 dark:text-white/40">
            Error: {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        )}
      </div>
    );
  }
}
