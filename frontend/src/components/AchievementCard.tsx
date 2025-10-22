import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export const AchievementCard = ({ achievement }: { achievement: any }) => {
  return (
    <section className="w-full h-full text-center relative group pb-1.5">
        <img src={achievement.photo} alt="" className="w-full h-50" />
        <h1>{achievement.certificate}</h1>
        <p className="text-sm text-neutral-400">{achievement.provider}</p>
            <Link to={achievement.proof} target="_blank" className="p-1.5 rounded-4xl absolute bottom-23 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
            md:opacity-0 md:group-hover:opacity-100">
                Show credential
            </Link>
    </section>
  )
}
