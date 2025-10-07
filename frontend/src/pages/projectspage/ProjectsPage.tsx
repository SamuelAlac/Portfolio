import { projects } from "@/lib/constants/projects"
import { ProjectCard } from "./components/ProjectCard"


const ProjectsPage = () => {
  return (
      <div className="md:flex md:flex-col md:space-y-0 justify-center mt-5">
        <h1 className="text-3xl pb-3">Projects</h1>
        <div className="space-y-4 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {projects.map((project, index) =>(
              <ProjectCard key={index} project={project}/>
            ))}
        </div>
      </div>
  )
}

export default ProjectsPage