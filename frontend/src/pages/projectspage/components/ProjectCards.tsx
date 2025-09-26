import { ProjectCard } from "@/components/ProjectCard";
import { useProjectsQuery } from "@/hooks/useProjectsQuery";

export const ProjectCards = () => {
    const { data: projects = [], isError, isLoading } = useProjectsQuery()
    
  return (
    <>
    {projects.map((project: any, index: number) =>(
        <ProjectCard key={index} project={project}/>
    ))}
    </>
  )
}
