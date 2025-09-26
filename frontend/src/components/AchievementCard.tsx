import { Button } from "./ui/button"

export const AchievementCard = ({ achievement }: { achievement: any }) => {
  return (
    <section className="w-full h-full text-center relative group">
        <img src={achievement.photo} alt="" className="w-full h-50" />
        <h1>{achievement.certificate}</h1>
        <p className="text-sm text-neutral-400">{achievement.provider}</p>
            <a href={achievement.proof} target="_blank">
                <Button className="absolute bottom-23 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                md:opacity-0 md:group-hover:opacity-100">
                    Show credential
                </Button>
            </a>
    </section>
  )
}
