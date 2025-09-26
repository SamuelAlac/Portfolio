export const Experiences = () => {
  return (
    <section className="w-full min-h-165">
        <div className="flex flex-col p-2 space-y-4">
          <h1 className="text-2xl">Experience</h1>
          <div className="flex flex-col gap-2 md:w-92">
            <h1 className="text-md font-semibold">SALESFORCE SUPPORTED VIRTUAL INTERNSHIP</h1>
            <div className="md:flex justify-between">
              <p>Participant / Trainee</p>
              <p className="text-neutral-500">Mar 2025 - May 2025</p>
            </div>
            <ul className="md:ps-3.5 md:list-disc space-y-1.5 text-neutral-300">
              <li>Completed an 8-week program with hands-on training and capstone project.</li>
              <li>Achieved Agentblazer Champion status with multiple Trailhead badges, completing 100% of required modules.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:w-92">
            <h1 className="text-md font-semibold">CAPSTONE PROJECT - BULACAN STATE UNIVERSITY</h1>
            <div className="md:flex justify-between">
              <p>Full-Stack Developer</p>
              <p className="text-neutral-500">Jan 2024 - Oct 2025</p>
            </div>
            <ul className="md:ps-3.5 md:list-disc space-y-1.5 text-neutral-300">
              <li>
                Built SDPTSolutions Academy, an AI-powered e-learning platform with Generative AI for personalized learning
                and content creation, improving student engagement.
              </li>

              <li>
                Delivered and maintained front-end (React.js, Bootstrap) and back-end (Next.js, Firebase) features, resulting
                in a 2x faster UI response and stable platform performance.
              </li>

              <li>
                Developed and integrated APIs, performed debugging and testing, reducing system errors and improving overall
                user experience.
              </li>
            </ul>
          </div>
        </div>
    </section>
  )
}
