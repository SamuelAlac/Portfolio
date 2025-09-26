import { specializations } from "@/lib/constants/specializations";
import { FaCode } from "react-icons/fa";

export const Specialization = () => {
  return (
    <section className="w-full min-h-65">
        <div className="flex flex-col gap-6 p-3">
          <h1 className="text-3xl">Specialization</h1>
          {specializations.map((specialization, index) =>(
            <figure key={index} className="flex items-center gap-3">
              <img src={specialization.logo} alt="" className="h-10" />
              <h1 className="text-lg">{specialization.service}</h1>
            </figure>
          ))}
        </div>
    </section>
  )
}
