import { Download } from "lucide-react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

export const Profile = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
        <div className="w-full">
          <ModeToggle/>
        </div>
        <img src='/SamuelAlac.svg' className="h-24 rounded-full" alt="Samuel Vincent Alac" />
        <h1 className="text-lg">Samuel Vincent Alac</h1>
        <p className="text-sm">Software Engineer</p>
        <a href="/Alac_Resume.pdf" target="_blank">
        <Button variant='secondary' size='sm' className="w-40">
            <Download /> Resume
        </Button>
        </a>
    </div>
  )
}
