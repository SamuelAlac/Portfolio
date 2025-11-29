import { GrCertificate } from "react-icons/gr";
import { IoTimeOutline, IoFolderOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";

export const CareerStats = () => {
  return (
    <section className="md:w-sm h-60 min-h-fit">
        <div className="flex flex-col items-center md:items-start gap-3">
          <h1 className="ps-3 pt-3 text-3xl">Career Stats</h1>
          <div className="h-40 min-h-fit w-fit grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div className="h-17 flex justify-evenly items-center rounded-2xl bg-white/5 shadow-[-1px_1px_5px_#CBACF9] 
            p-5 transition ease-in-out hover:scale-102 hover:shadow-[-1px_1px_10px_#CBACF9]">
                <GrCertificate className="text-6xl text-[#CBACF9]"/>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold text-[#CBACF9]">Certificates</h3>
                  <p className="text-4xl font-semibold">7</p>
                </div>
            </div>

            <div className="h-17 flex justify-evenly items-center rounded-2xl bg-white/5 shadow-[-1px_1px_5px_#CBACF9] 
            p-5 transition ease-in-out hover:scale-102 hover:shadow-[-1px_1px_10px_#CBACF9]">
                <IoTimeOutline className="text-6xl text-[#CBACF9]"/>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold text-[#CBACF9]">Experiences</h3>
                  <div className="flex items-center">
                    <p className="text-4xl font-semibold">11</p>
                    <span className="font-semibold">mos</span>
                  </div>
                </div>
            </div>

            <div className="h-17 flex justify-evenly items-center rounded-2xl bg-white/5 shadow-[-1px_1px_5px_#CBACF9] 
            p-5 transition ease-in-out hover:scale-102 hover:shadow-[-1px_1px_10px_#CBACF9]">
                <IoFolderOutline className="text-6xl text-[#CBACF9]"/>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold text-[#CBACF9]">Projects</h3>
                  <p className="text-4xl font-semibold">5</p>
                </div>
            </div>

            <div className="h-17 flex justify-evenly items-center rounded-2xl bg-white/5 shadow-[-1px_1px_5px_#CBACF9] 
            p-5 transition ease-in-out hover:scale-102 hover:shadow-[-1px_1px_10px_#CBACF9]">
                <FaCode className="text-6xl text-[#CBACF9]"/>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold text-[#CBACF9]">Languages</h3>
                  <p className="text-4xl font-semibold">7</p>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}
