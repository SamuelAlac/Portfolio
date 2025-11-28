import { SkillsBadge } from "@/components/SkillsBadge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { artificialintelligenceskills, backendskills, frontendskills, testings, tools } from "@/lib/constants/skills"

export const TechnicalSkills = () => {
  return (
    <section className="w-full min-h-60">
        <div className="space-y-5">
          <Tabs defaultValue="Frontend" className="w-full">
            <TabsList className="mb-5">
              <TabsTrigger className="text-[10px] md:text-sm" value="Frontend">Frontend</TabsTrigger>
              <TabsTrigger className="text-[10px] md:text-sm" value="Backend">Backend</TabsTrigger>
              <TabsTrigger className="text-[10px] md:text-sm" value="AI">AI / ML</TabsTrigger>
              <TabsTrigger className="text-[10px] md:text-sm" value="Testing">Testing</TabsTrigger>
              <TabsTrigger className="text-[10px] md:text-sm" value="Tools">Tools</TabsTrigger>
            </TabsList>
            <TabsContent className="ps-0.5 md:ps-2.5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-5 gap-2 md:gap-5" value="Frontend">
              {frontendskills.map((skill, index) =>(
                  <SkillsBadge skill={skill} key={index}/>
              ))}
            </TabsContent>
            <TabsContent className="ps-0.5 md:ps-2.5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-5 gap-2 md:gap-5" value="Backend">
              {backendskills.map((skill, index) =>(
                  <SkillsBadge skill={skill} key={index}/>
              ))}
            </TabsContent>
            <TabsContent className="ps-0.5 md:ps-2.5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-5 gap-2 md:gap-5" value="AI">
              {artificialintelligenceskills.map((skill, index) =>(
                  <SkillsBadge skill={skill} key={index}/>
              ))}
            </TabsContent>
            <TabsContent className="ps-0.5 md:ps-2.5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-5 gap-2 md:gap-5" value="Testing">
              {testings.map((skill, index) =>(
                  <SkillsBadge skill={skill} key={index}/>
              ))}
            </TabsContent>
            <TabsContent className="ps-0.5 md:ps-2.5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-5 gap-2 md:gap-5" value="Tools">
              {tools.map((skill, index) =>(
                  <SkillsBadge skill={skill} key={index}/>
              ))}
            </TabsContent>
          </Tabs>
        </div>
    </section>
  )
}
