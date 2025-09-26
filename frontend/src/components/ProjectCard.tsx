import { Link } from "react-router-dom"
import { Badge } from "./ui/badge"
    // console.log(projects?.[0]?.name)
    // console.log(projects?.[0]?.description)
    // console.log(projects?.[0]?.html_url)
    // console.log(projects?.[0]?.created_at)
export const ProjectCard = ({ project }: { project:any }) => {
    console.log(project.name)
  return (
    <section className="md:min-w-90 h-50">
        <div className="m-3">
            <Link to={project.html_url} target="_blank" className="font-bold hover:underline">{project.name}</Link>
            <p className="text-neutral-500 mt-0.5 mb-3">{project?.created_at}</p>
            <div className="space-y-3">
                <p className="text-sm md:text-md">{project?.description}</p>
                <div className="mt-3 flex gap-2">
                    <Badge variant="default">{project?.languages}</Badge>
                </div>
            </div>
        </div>
    </section>
  )
}
