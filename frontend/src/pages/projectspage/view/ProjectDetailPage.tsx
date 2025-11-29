import { ReadMeViewer } from "@/components/ReadMeViewer";
import { useProject } from "@/features/github/hooks";
import { useParams } from "react-router-dom"

const ProjectDetailPage = () => {
  const { repo } = useParams();
  if(!repo) throw new Error('repo is missing');
  console.log(repo)
  const { data: project, isLoading } = useProject({repo})

  if(isLoading){
    return (
      <div className="h-full flex justify-center items-center">
        <h1 className="text-center text-4xl">Loading...</h1>
      </div>
    )
  }

  if (!project?.readMe){
    return (
      <div className="h-full flex justify-center items-center">
        <h1 className="text-center text-4xl text-[#CBACF9]">Oops! This project is either private or unavailable.</h1>
      </div>
    )
  }
  
  return (
    <section className="p-3 h-full w-full">
      <div>
        {/* <h1 className="text-center text-3xl">{repo}</h1> */}
        <ReadMeViewer readMe={project.readMe}/>
      </div>
    </section>
  )
}

export default ProjectDetailPage