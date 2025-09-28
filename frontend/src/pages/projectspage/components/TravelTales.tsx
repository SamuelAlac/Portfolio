import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader,
DialogTitle, DialogFooter, DialogDescription, DialogClose } from '@/components/ui/dialog'

export const TravelTales = () => {
  return (
        <section className="w-full h-full text-center relative group">
            <img src='/TravelTales.png' alt="" className="w-full h-45" />
            <h1 className="font-bold">Travel Tales</h1>
            <h3 className="text-neutral-500">2025</h3>
            <p className="px-3 pt-3 h-35 text-sm text-justify">
            This is my personal project, where I used React, tailwindCSS, DaisyUI and Firebase to showcase my
            front-end skills.
            </p>
            <div className="px-3 grid grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 w-full justify-items-center gap-2">
                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/typescript.svg" alt="" className="col w-5" title="Typescript"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/react.svg" alt="" className="col w-5" title="React.js"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/vite.svg" alt="" className="col w-5" title="Vite"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/reactrouter.svg" alt="" className="col w-5" title="React Router"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/tanstack.svg" alt="" className="col w-5" title="Tanstack"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/redux.svg" alt="" className="col w-5" title="Redux"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/tailwindcss.svg" alt="" className="col w-5" title="TailwindCSS"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/daisyUI.svg" alt="" className="col w-5" title="DaisyUI"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/backend/firebase.svg" alt="" className="col w-5" title="Firebase"/>
                </Badge>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                <Button className="absolute top-35 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                md:opacity-0 md:group-hover:opacity-100">
                    Show Preview
                </Button>
                </DialogTrigger>
                {/* <EnrollmentSystemDialog/> */}
            </Dialog>
        </section>
  )
}
