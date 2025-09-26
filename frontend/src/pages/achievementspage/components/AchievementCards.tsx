import { achievements } from "@/lib/constants/certificates"
import { AchievementCard } from '@/components/AchievementCard'

export const AchievementCards = () => {
  return (
      <div className="md:flex md:flex-col md:space-y-0 justify-center mt-5">
        <h1 className="text-3xl pb-3">Achievements</h1>
        <div className="space-y-4 grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) =>(
                <AchievementCard key={index} achievement={achievement}/>
            ))}
        </div>
      </div>
  )
}
