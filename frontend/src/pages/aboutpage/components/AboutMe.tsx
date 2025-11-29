import { CodeBlock } from "@/components/CodeBlocks"
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
