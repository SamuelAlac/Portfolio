import { achievements } from "@/lib/constants/certificates"
import { lazy } from "react"
const LazyAchievementCard = lazy(() => import('@/components/AchievementCard').then(module =>{
  return { default: module.AchievementCard }
}))

export const AchievementCards = () => {
  return (
    <>
      {achievements.map((achievement, index) =>(
          <LazyAchievementCard key={index} achievement={achievement}/>
      ))}
    </>
  )
}
