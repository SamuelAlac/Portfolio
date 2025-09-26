import { achievements } from "@/lib/constants/certificates"
import { AchievementCard } from '@/components/AchievementCard'

export const AchievementCards = () => {
  return (
    <>
      {achievements.map((achievement, index) =>(
          <AchievementCard key={index} achievement={achievement}/>
      ))}
    </>
  )
}
