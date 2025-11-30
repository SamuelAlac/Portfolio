import { lazy } from "react"
import { useAuthUser } from "@/features/auth/hooks"
const LazyProjectCards = lazy(() => import('./components/ProjectCards').then(module =>{
  return { default: module.ProjectCards }
}))

const ProjectsPage = () => {

  const { data } = useAuthUser()
  const user = data
  console.log(user)
  return (
      <div className="md:flex md:flex-col md:space-y-0 justify-center mt-5">
        <div className="flex justify-between">
          <h1 className="text-3xl pb-3">Projects</h1>
          {user 
          ? (
            <button className="text-3xl pb-3 text-amber-800">Add Project</button>
            )
          : ''}
        </div>
        <div className="space-y-4 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            <LazyProjectCards/>
        </div>
      </div>
  )
}

export default ProjectsPage