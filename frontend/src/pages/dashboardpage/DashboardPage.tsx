import { ContributionStats } from "./components/ContributionStats";

const DashboardPage = () => {
  return (
    <div className="space-y-5 flex flex-col lg:flex-row md:space-y-0">
        <div className="md:flex-grow space-y-5">
            <ContributionStats/>
            {/* <CareerStats/>  */}
        </div>

        {/* <div className="space-y-5 lg:ms-5 md:mt-5 lg:mt-0">
            <Skills/>
            <Specialization/>
            <ContactMe/> 
        </div> */}
    </div>
  )
}

export default DashboardPage
