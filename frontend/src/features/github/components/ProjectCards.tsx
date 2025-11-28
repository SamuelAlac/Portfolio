import { ProjectCard } from "@/features/github/components/ProjectCard";
import { useProjects } from "@/features/github/hooks";

export const ProjectCards = () => {
  const { data: projects = [], isError, isLoading } = useProjects()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error!</div>
    
  return (
    <>
    {projects.map((project: any, index: number) =>(
        <ProjectCard key={index} project={project}/>
    ))}
    </>
  )
}