import { socmeds } from "@/lib/constants/socmeds"

export const ContactMe = () => {
  return (
    <section className="md:min-w-98 max-w-md min-h-30">
        <div className="flex flex-col gap-6 p-3">
          <h1 className="text-3xl">Contact Me</h1>
          <div className="flex flex-row gap-8">
            {socmeds.map((socmed, index) =>(
                <img src={socmed} alt="" className="h-8" />
            ))}
          </div>
        </div>
    </section>
  )
}
