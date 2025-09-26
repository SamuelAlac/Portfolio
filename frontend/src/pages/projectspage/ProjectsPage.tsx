import { Badge } from "@/components/ui/badge"

const ProjectsPage = () => {
  return (
      <div className="md:flex md:flex-col md:space-y-0 justify-center mt-5">
        <h1 className="text-3xl pb-3">Projects</h1>
        <div className="space-y-2 grid md:grid-cols-3 gap-4">
            <section className="md:min-w-90 h-50">
                <div className="m-3">
                    <h3 className="font-bold">Project Name</h3>
                    <p className="text-neutral-500 mt-0.5 mb-3">Date Created</p>
                    <div className="space-y-3">
                        <p className="text-sm md:text-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam sequi qui fugit!
                            Blanditiis perferendis, velit maxime veritatis facere eligendi, impedit quidem tenetur
                            cumque quas dolorum necessitatibus, ullam a praesentium.
                        </p>
                        <div className="mt-3 flex gap-2">
                            <Badge variant="default">Badge</Badge>
                            <Badge variant="destructive">Badge</Badge>
                            <Badge variant="outline">Badge</Badge>
                            <Badge variant="secondary">Badge</Badge>
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:min-w-90 h-50">
                Project
            </section>

            <section className="md:min-w-90 h-50">
                Project
            </section>

            <section className="md:min-w-90 h-50">
                Project
            </section>

            <section className="md:min-w-90 h-50">
                Project
            </section>

            <section className="md:min-w-90 h-50">
                Project
            </section>

            <section className="md:min-w-90 h-50">
                Project
            </section>

            <section className="md:min-w-90 h-50">
                Project
            </section>

            <section className="md:min-w-90 h-50">
                Project
            </section>
        </div>
      </div>
  )
}

export default ProjectsPage