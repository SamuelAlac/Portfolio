import { Badge } from "@/components/ui/badge"

export const SkillsBadge = ({ skill }: { skill: any }  ) => {
  return (
    <Badge variant="secondary" className="bg w-35">
        <img src={skill.icon} alt={`${skill.name} icon`} className="w-7" />
        {skill.name}
    </Badge>
  )
}
