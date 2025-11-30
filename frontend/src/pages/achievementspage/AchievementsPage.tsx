import { lazy } from "react"
const LazyAchievementsCard = lazy(() => import('./components/AchievementCards').then(module =>{
  return { default: module.AchievementCards }
}))

const AchievementsPage = () => {
  return (
    <div className="md:flex md:flex-col md:space-y-0 justify-center mt-5">
      <h1 className="text-3xl pb-3">Achievements</h1>
        <div className="space-y-4 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        <LazyAchievementsCard/>
        </div>
      </div>
  )
}

export default AchievementsPage