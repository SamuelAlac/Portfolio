import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader,
DialogTitle, DialogFooter, DialogDescription, DialogClose } from '@/components/ui/dialog'

export const PocketExpress = () => {
  return (
        <section className="w-full h-full text-center relative group">
            <img src='/PocketExpress.png' alt="" className="w-full h-45" />
            <h1 className="font-bold">Pocket Express</h1>
            <h3 className="text-neutral-500">2024</h3>
            <p className="px-3 pt-3 h-35 text-sm text-justify">
            This is our project on Mobile Application Development (MAD) during 3rd Year where we used Java and SQLite.
            </p>
            <div className="px-3 grid grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 w-full justify-items-center gap-2">
                <Badge variant="secondary" className="col">
                    <img src="/skills/backend/java.svg" alt="" className="col w-5" title="Java"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/backend/sqlite.svg" alt="" className="col w-5" title="SQLite"/>
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
