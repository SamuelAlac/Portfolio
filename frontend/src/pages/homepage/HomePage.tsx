import { CareerStats } from "./components/CareerStats"
import { ContactMe } from "./components/ContactMe"
import { Expertise } from "./components/Expertise"
import { Hero } from "./components/Hero"
import { Skills } from "./components/Skills"

const HomePage = () => {
  return (
      <div className="space-y-5 md:flex md:space-y-0">
        <div className="md:flex-grow space-y-5">
          <Hero/>
          <Skills/>
        </div>

        <div className="space-y-5">
          <CareerStats/>
          <Expertise/>
          <ContactMe/>
        </div>
      </div>
  )
}

export default HomePage