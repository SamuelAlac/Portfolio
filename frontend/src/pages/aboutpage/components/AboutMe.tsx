import { CodeBlock } from 'react-code-block';

function CodeBlockDemo({ code, language }: { code: any, language: any }) {
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}
 
const aboutMeCode = 
`
// Information about Samuel
const aboutMe = {
  name: 'Samuel Vincent R. Alac',
  age: 22,
  description: 'Focused on developing scalable apps and learning new technologies.',
  interest: ['Web Development', 'Mobile Development', 'UI/IX Design'],
  socials: {
    github: 'https://github.com/SamuelAlac',
    linkedin: 'https://www.linkedin.com/in/samuel-alac-7a574534b/',
  },
}`

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
          <CodeBlockDemo code={aboutMeCode} language={'js'}/>
        </div>
    </section>
  )
}
