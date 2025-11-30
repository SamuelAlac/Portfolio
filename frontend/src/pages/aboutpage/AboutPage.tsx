import Seo from "@/Seo"
import { lazy, Suspense } from "react"
import { AboutMeSkeleton } from "./components/AboutMe"
const LazyAboutMe = lazy(() => import('./components/AboutMe').then(module =>{
  return { default: module.AboutMe }
}))
const LazyEducation = lazy(() => import('./components/Education').then(module =>{
  return { default: module.Education }
}))
const LazyExperience = lazy(() => import('./components/Experiences').then(module =>{
  return { default: module.Experiences }
}))

const AboutPage = () => {
  return (
    <>
    <Seo title="About | Samuel Alac Portfolio" description="My Information About me, Education, and Experiences" />
      <div className="space-y-5 md:flex flex-col lg:flex-row md:space-y-0">
        <div className="md:flex-grow space-y-5">
          <Suspense fallback={<AboutMeSkeleton/>}>
            <LazyAboutMe/>
          </Suspense>
            <LazyEducation/>
        </div>

        <div className="space-y-5 md:mt-5 lg:ms-5 lg:mt-0">
            <LazyExperience/>
        </div>
      </div>
    </>
  )
}

export default AboutPage