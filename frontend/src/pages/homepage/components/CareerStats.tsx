import { GrCertificate } from "react-icons/gr";
import { IoTimeOutline, IoFolderOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";

export const CareerStats = () => {
  return (
    <section className="w-sm min-h-60">
        <div className="flex flex-col gap-3">
          <h1 className="ps-3 pt-3 text-3xl">Career Stats</h1>
          <div className="h-40 grid grid-cols-2 gap-4 p-2">
            <div className="h-17 bg-secondary flex justify-evenly items-center rounded-xl">
                <GrCertificate className="text-6xl"/>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold">Certificates</h3>
                  <p className="text-4xl font-semibold">7</p>
                </div>
            </div>

            <div className="h-17 bg-secondary flex justify-evenly items-center rounded-xl">
                <IoTimeOutline className="text-6xl"/>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold">Experiences</h3>
                  <div className="flex items-center">
                    <p className="text-4xl font-semibold">11</p>
                    <span className="font-semibold">mos</span>
                  </div>
                </div>
            </div>

            <div className="h-17 bg-secondary flex justify-evenly items-center rounded-xl">
                <IoFolderOutline className="text-6xl"/>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold">Projects</h3>
                  <p className="text-4xl font-semibold">5</p>
                </div>
            </div>

            <div className="h-17 bg-secondary flex justify-evenly items-center rounded-xl">
                <FaCode className="text-6xl"/>
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold">Languages</h3>
                  <p className="text-4xl font-semibold">7</p>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}
