import { CodeBlock } from "@/components/CodeBlock"
import { Skeleton } from "@/components/ui/skeleton"
import { aboutMeCode } from "@/lib/constants/aboutMe"

export const AboutMe = () => {
  return (
    <section className="w-full min-h-fit h-78">
        <div className="xl:hidden p-3 space-y-5">
          <h1 className="text-lg md:text-3xl">About</h1>
          <div className="max-w-180">
            <p className="text-md md:text-2xl text-neutral-300">I am Aspiring Software Engineer with experience in building scalable web and mobile applications.
              Committed to continuous learning, adapting to emerging technologies, writing clean and maintainable code,
              solving problems, and delivering innovative solutions.</p>
          </div>
        </div>
        <div className='hidden xl:block'>
          <CodeBlock code={aboutMeCode} language={'js'}/>
        </div>
    </section>
  )
}

export const AboutMeSkeleton = () => {
  return (
    <section className="w-full min-h-fit h-78">
        <div className="p-3 space-y-5">
          <Skeleton className="h-8 w-50 bg-white/20 rounded-2xl"/>
          <div className="max-w-180 space-y-5.5">
            <Skeleton className="h-5 w-170 bg-white/20 rounded-2xl"/>
            <Skeleton className="h-5 w-170 bg-white/20 rounded-2xl"/>
            <Skeleton className="h-5 w-170 bg-white/20 rounded-2xl"/>
            <Skeleton className="h-5 w-170 bg-white/20 rounded-2xl"/>
            <Skeleton className="h-5 w-170 bg-white/20 rounded-2xl"/>
          </div>
        </div>
    </section>
  )
}

