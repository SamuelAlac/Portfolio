import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader,
DialogTitle, DialogFooter, DialogDescription, DialogClose } from '@/components/ui/dialog'

export const ProjectCard = ({ project }: { project: any }) => {
  return (
        <section className="w-full h-full text-center relative group">
            <img src={project.image} alt="" className="w-full h-45" />
            <h1 className="font-bold">{project.name}</h1>
            <h3 className="text-neutral-500">{project.startDate}</h3>
            <p className="px-3 pt-3 h-35 text-sm text-justify">{project.description}</p>
            <div className="px-3 grid grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 w-full justify-items-center gap-2">
                {project.materials.map((material: any, index: number) =>(
                    <Badge key={index} variant="secondary" className="col">
                    <img src={material.img} alt="" className="col w-5" title={material.name}/>
                </Badge>
                ))}
            </div>
            <Dialog>
                <DialogTrigger asChild>
                <Button className="absolute top-35 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                md:opacity-0 md:group-hover:opacity-100">
                    Show Preview
                </Button>
                </DialogTrigger>
                <EnrollmentSystemDialog/>
            </Dialog>
        </section>
  )
}

const EnrollmentSystemDialog = () => {
  return (
    <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle>Enrollment System Preview</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
        </DialogHeader>

        <DialogFooter>
        <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
        </DialogClose>
            <Button type="submit">Save changes</Button>
        </DialogFooter>
    </DialogContent>
  )
}
