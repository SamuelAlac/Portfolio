import { ProjectCard } from "@/features/github/components/ProjectCard";
import { useProjects } from "@/features/github/hooks";

export const ProjectCards = () => {
    const { data: projects = [], isError, isLoading } = useProjects()
    
  return (
    <>
    {projects.map((project: any, index: number) =>(
        <ProjectCard key={index} project={project}/>
    ))}
    </>
  )
}