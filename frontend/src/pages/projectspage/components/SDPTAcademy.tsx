import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader,
DialogTitle, DialogFooter, DialogDescription, DialogClose } from '@/components/ui/dialog'

export const SDPTAcademy = () => {
  return (
        <section className="w-full h-full text-center relative group">
            <img src='/SDPTAcademy.png' alt="" className="w-full h-45" />
            <h1 className="font-bold">SDPT Academy</h1>
            <h3 className="text-neutral-500">2025</h3>
            <p className="px-3 pt-3 h-35 text-sm text-justify">
            This is our Capstone Project, an AI-powered E-learning platform with Generative AI
            for personalized learning and content creation, improving student engagement. It is
            built with Next.js and integrated OpenAI with LangChain for Chatbot.
            </p>
            <div className="px-3 grid grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 w-full justify-items-center gap-2">
                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/typescript.svg" alt="" className="col w-5" title="Typescript"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/nextjs.svg" alt="" className="col w-5" title="Next.js"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/tanstack.svg" alt="" className="col w-5" title="Tanstack"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/frontend/bootstrap.svg" alt="" className="col w-5" title="Bootstrap"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/ai/openai.svg" alt="" className="col w-5" title="OpenAI"/>
                </Badge>

                <Badge variant="secondary" className="col">
                    <img src="/skills/ai/langchain.svg" alt="" className="col w-5" title="LangChain"/>
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
