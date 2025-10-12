import { Skills } from "./components/Skills"
import { ContactMe } from "./components/ContactMe"
import { Specialization } from "./components/Specialization"
import { Hero } from "./components/Hero"
import { CareerStats } from "./components/CareerStats"
import Seo from "@/Seo"

const HomePage = () => {
  return (
    <>
    <Seo title="Home | Samuel Alac Portfolio" description="My Career Stats, skills, specialization and contact" />
      <div className="space-y-5 flex flex-col lg:flex-row md:space-y-0">
        <div className="md:flex-grow space-y-5">
          <Hero/>
          <CareerStats/>
        </div>

        <div className="space-y-5 lg:ms-5 md:mt-5 lg:mt-0">
          <Skills/>
          <Specialization/>
          <ContactMe/>
        </div>
      </div>
    </>
  )
}

export default HomePage