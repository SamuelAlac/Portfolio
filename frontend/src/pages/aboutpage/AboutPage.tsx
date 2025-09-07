import { AboutMe } from "./components/AboutMe"
import { Education } from "./components/Education"
import { Experiences } from "./components/Experiences"

const AboutPage = () => {
  return (
    <div className="space-y-5 md:flex md:space-y-0">
     <div className="md:flex-grow space-y-5">
        <AboutMe/>
        <Education/>
     </div>

     <div className="space-y-5">
        <Experiences/>
     </div>
    </div>
  )
}

export default AboutPage