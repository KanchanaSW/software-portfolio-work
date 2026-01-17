import { supabase } from './supabase';
import { ProjectCard } from '@/constants/site-data';
import { Tables } from '@/types/supabase';

type ProjectRow = Tables<'projects'>;

/**
 * Maps a database project row to the ProjectCard interface
 */
function mapProjectRowToCard(row: ProjectRow): ProjectCard {
  return {
    id: row.id,
    title: row.title,
    subtitle: row.subtitle ?? undefined,
    description: row.description ?? undefined,
    imageUrl: row.image_url ?? undefined,
    imageAlt: row.image_alt ?? undefined,
    tags: row.tags ?? undefined,
    type: row.type as 'image' | 'code' | 'text' | 'feature',
    backgroundColor: row.background_color ?? undefined,
    textColor: row.text_color ?? undefined,
    aspectRatio: row.aspect_ratio ?? undefined,
    colSpan: row.col_span ?? undefined,
    minHeight: row.min_height ?? undefined,
    codeContent: row.code_content ?? undefined,
    textContent: row.text_content ?? undefined,
    iconName: row.icon_name ?? undefined,
    iconNames: row.icon_names ?? undefined,
    githubUrl: row.github_url ?? undefined,
    liveDemoUrl: row.live_demo_url ?? undefined,
  };
}

/**
 * Fetches all projects from Supabase
 */
export async function getProjects(): Promise<ProjectCard[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      // In development, return empty array instead of crashing
      if (process.env.NODE_ENV === 'development') {
        return [];
      }
      
      throw new Error(`Failed to fetch projects: ${error.message}`);
    }

    if (!data) {
      return [];
    }

    const projects = data.map(mapProjectRowToCard);
    
    // Debug: Log image URLs in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📦 Fetched projects from Supabase:', projects.length);
      projects.forEach((project) => {
        if (project.imageUrl) {
          console.log(`✅ [${project.id}] "${project.title}" - Image URL:`, project.imageUrl);
        } else {
          console.warn(`⚠️ [${project.id}] "${project.title}" - No image URL in database`);
        }
      });
    }

    return projects;
  } catch (err) {
    // In development, return empty array instead of crashing
    if (process.env.NODE_ENV === 'development') {
      return [];
    }
    
    throw err;
  }
}
