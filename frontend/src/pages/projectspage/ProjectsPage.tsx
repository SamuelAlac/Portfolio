import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Link } from "react-router-dom"
import { EnrollmentSystem } from "./components/EnrollmentSystem"
import { PocketExpress } from "./components/PocketExpress"
import { TravelTales } from "./components/TravelTales"
import { GuideBot } from "./components/GuideBot"
import { SDPTAcademy } from "./components/SDPTAcademy"


const ProjectsPage = () => {
  return (
      <div className="md:flex md:flex-col md:space-y-0 justify-center mt-5">
        <h1 className="text-3xl pb-3">Projects</h1>
        <div className="space-y-4 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            <EnrollmentSystem/>
            <PocketExpress/>
            <TravelTales/>
            <GuideBot/>
            <SDPTAcademy/>
        </div>
      </div>
  )
}

export default ProjectsPage