import { Download } from "lucide-react"
import { Button } from "./ui/button"

export const Profile = () => {
  return (
    <div className="flex flex-col items-center space-y-2 text-white">
        <div className="w-full">
          {/* <ModeToggle/> nasira haha */}
        </div>
        <img src='/SamuelAlac.svg' className="h-24 rounded-full" alt="Samuel Vincent Alac Profile" />
        <h1 className="text-lg">Samuel Vincent Alac</h1>
        <h2 className="text-sm">Aspiring Software Engineer</h2>
        <a href="/Alac_Resume.pdf" target="_blank">
        <Button size='sm' className="w-40 bg-white/10 hover:bg-white/20">
            <Download /> Resume
        </Button>
        </a>
    </div>
  )
}
