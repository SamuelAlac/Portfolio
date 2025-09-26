import { AboutMe } from "./components/AboutMe"
import { Education } from "./components/Education"
import { Experiences } from "./components/Experiences"

const AboutPage = () => {
  return (
    <div className="space-y-5 md:flex flex-col lg:flex-row md:space-y-0">
     <div className="md:flex-grow space-y-5">
        <AboutMe/>
        <Education/>
     </div>

     <div className="space-y-5 md:mt-5 lg:ms-5 lg:mt-0">
        <Experiences/>
     </div>
    </div>
  )
}

export default AboutPage