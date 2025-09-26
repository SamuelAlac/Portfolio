import { SkillsCarousel } from "@/components/SkillsCarousel"
import { backend, frontend } from "@/lib/constants/skills"

export const Skills = () => {
  return (
    <section className="w-full min-h-60">
        <div className="flex flex-col gap-3">
          <h1 className="ps-3 pt-3 text-3xl">Skills</h1>
            <SkillsCarousel skills={frontend}/>
            <SkillsCarousel skills={backend}/>
        </div>
    </section>
  )
}
