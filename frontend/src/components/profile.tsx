import { Download } from "lucide-react"
import { Button } from "./ui/button"

export const Profile = () => {
  return (
    <div className="flex flex-col items-center space-y-1.5">
        <img src='/SamuelAlac.svg' className="h-24 rounded-full" alt="Samuel Vincent Alac" />
        <h1 className="text-lg">Samuel Vincent Alac</h1>
        <p className="text-sm">Full-Stack Developer</p>
        <Button variant='secondary' size='sm' className="w-40" onClick={() => alert('Downloading...')}>
            <Download /> Resume
        </Button>
    </div>
  )
}
