import { SkillsCarousel } from "@/components/SkillsCarousel"

export const Skills = () => {
  return (
    <section className="md:min-w-98 max-w-md min-h-60">
        <div className="flex flex-col gap-3">
          <h1 className="ps-3 pt-3 text-3xl">Skills</h1>
            <SkillsCarousel/>
            <SkillsCarousel/>
        </div>
    </section>
  )
}
