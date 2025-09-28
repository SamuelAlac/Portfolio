import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader,
DialogTitle, DialogFooter, DialogDescription, DialogClose } from '@/components/ui/dialog'

export const GuideBot = () => {
  return (
        <section className="w-full h-full text-center relative group">
            <img src='/GuideBot.png' alt="" className="w-full h-45" />
            <h1 className="font-bold">Guide Bot</h1>
            <h3 className="text-neutral-500">2025</h3>
            <p className="px-3 pt-3 h-35 text-sm text-justify">
            This is my personal project where I built a Discord bot using Discord.js 
            and integrated Google Gemin with LangChain. I created it to challenge myself 
            and explore how large language models can enhance a chatbot experience. 

            </p>
            <div className="px-3 grid grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 w-full justify-items-center gap-2">
                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/javascript.svg" alt="" className="col w-5" title="Javascript"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/backend/nodejs.svg" alt="" className="col w-5" title="Node.js"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/backend/discordjs.svg" alt="" className="col w-5" title="Discord.js"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/ai/gemini.svg" alt="" className="col w-5" title="Google Gemini"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/ai/langchain.svg" alt="" className="col w-5" title="LangChain"/>
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
