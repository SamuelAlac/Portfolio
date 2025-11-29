import { Badge } from "@/components/ui/badge"

export const SkillsBadge = ({ skill }: { skill: any }  ) => {
  return (
    <Badge className="bg-white/10 w-35 rounded-4xl hover:bg-[#13162D] hover:text-[#CBACF9] 
    transition ease-in-out hover:scale-105 shadow-[-1px_1px_5px_#CBACF9] hover:shadow-[-1px_1px_10px_#CBACF9]">
        <img src={skill.icon} alt={`${skill.name} icon`} className="w-7" />
        {skill.name}
    </Badge>
  )
}
