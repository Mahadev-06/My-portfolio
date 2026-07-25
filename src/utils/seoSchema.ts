/**
 * SEO & Schema.org Helpers for Projects and Future Blog Posts
 */

export interface BlogPostMetadata {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified: string
  authorName?: string
  keywords?: string[]
}

export interface ProjectMetadata {
  title: string
  description: string
  url: string
  image?: string
  techStack: string[]
  applicationCategory?: string
}

/**
 * Generate BlogPosting JSON-LD Schema
 */
export function generateBlogPostingSchema(post: BlogPostMetadata) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
    headline: post.title,
    description: post.description,
    image: post.image || 'https://mahadevpatro.dev/me.webp',
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Person',
      name: post.authorName || 'Mahadev Patro',
      url: 'https://mahadevpatro.dev',
    },
    publisher: {
      '@type': 'Person',
      name: 'Mahadev Patro',
      url: 'https://mahadevpatro.dev',
    },
    keywords: post.keywords ? post.keywords.join(', ') : 'Full-Stack Development, AI, Web Development',
  }
}

/**
 * Generate SoftwareApplication / CreativeWork JSON-LD Schema
 */
export function generateProjectSchema(project: ProjectMetadata) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    url: project.url,
    image: project.image || 'https://mahadevpatro.dev/me.webp',
    applicationCategory: project.applicationCategory || 'DeveloperApplication',
    operatingSystem: 'Web',
    author: {
      '@type': 'Person',
      name: 'Mahadev Patro',
      url: 'https://mahadevpatro.dev',
    },
    keywords: project.techStack.join(', '),
  }
}
