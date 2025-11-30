import { projects } from '@/lib/constants/projects'
import { lazy } from 'react'
const LazyProjectCard = lazy(() => import('./ProjectCard').then(module =>{
    return { default: module.ProjectCard }
}))

export const ProjectCards = () => {
  return projects.map((project, index) => <LazyProjectCard key={index} project={project}/>)
}
