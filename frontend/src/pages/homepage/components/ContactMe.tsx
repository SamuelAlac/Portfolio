import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { socials } from "@/lib/constants/socmeds"
import { Link } from "react-router-dom"

export const ContactMe = () => {
  return (
    <section className="w-full min-h-30">
        <div className="flex flex-col gap-6 p-3">
          <h1 className="text-3xl">Contact Me</h1>
          <div className="flex flex-row gap-8">
            {socials.map((social, index) =>(
              <Link to={social.link} target="_blank" className="transition ease-in-out hover:scale-125">
                <Tooltip>
                  <TooltipTrigger>
                    <img key={index} src={social.img} alt={social.name} title={social.link} className="h-8" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>{social.name}</span>
                  </TooltipContent>
                </Tooltip>
              </Link>
            ))}
          </div>
        </div>
    </section>
  )
}
