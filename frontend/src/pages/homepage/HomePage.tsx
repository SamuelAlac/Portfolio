import { Skills } from "./components/Skills"
import { ContactMe } from "./components/ContactMe"
import { Specialization } from "./components/Specialization"
import { Hero } from "./components/Hero"
import { CareerStats } from "./components/CareerStats"

const HomePage = () => {
  return (
      <div className="space-y-5 lg:flex md:space-y-0">
        <div className="md:flex-grow space-y-5">
          <Hero/>
          <CareerStats/>
        </div>

        <div className="space-y-5">
          <Skills/>
          <Specialization/>
          <ContactMe/>
        </div>
      </div>
  )
}

export default HomePage