import GithubCalendar from 'react-github-calendar'

export const ContributionStats = () => {

  return (
    <section className="w-full min-h-65">
        <div className="p-3">
          <h1 className="text-lg md:text-3xl mb-5">GitHub Contributions</h1>
          <p className="my-0.5">Contribution number</p>
          <div className="w-full h-55 flex">
            <div className="flex-grow outline-1">
              <div className="w-full">
                <GithubCalendar username="samuelalac" year={2025} blockMargin={5} blockSize={15} showWeekdayLabels/>
              </div>
            </div>

            <div className="w-30">
              
            </div>
          </div>
        </div>
    </section>
  )
}
