import Seo from "@/Seo"
import { lazy } from "react"
const LazyHero = lazy(() => import('./components/Hero').then(module => {
  return { default: module.Hero }
}))
const LazyTechnicalSkills = lazy(() => import('./components/TechnicalSkills').then(module =>{
  return { default: module.TechnicalSkills }
}))
const LazyCareerStats = lazy(() => import('./components/CareerStats').then(module => {
  return { default: module.CareerStats }
}))
const LazySpecialization = lazy(() => import('./components/Specialization').then(module =>{
  return { default: module.Specialization }
}))
const LazyContactMe = lazy(() => import('./components/ContactMe').then(module =>{
  return { default: module.ContactMe }
}))

const HomePage = () => {
  return (
    <>
    <Seo title="Home | Samuel Alac Portfolio" description="My Career Stats, skills, specialization and contact"
    image="/homeseo.webp" />
      <div className="space-y-5 flex flex-col lg:flex-row md:space-y-0">
        <div className="md:flex-grow space-y-5">
          <LazyHero/>
          <LazyTechnicalSkills/>
        </div>

        <div className="space-y-5 lg:ms-5 md:mt-5 lg:mt-0">
          <LazyCareerStats/>
          <LazySpecialization/>
          <LazyContactMe/>
        </div>
      </div>
    </>
  )
}

export default HomePage