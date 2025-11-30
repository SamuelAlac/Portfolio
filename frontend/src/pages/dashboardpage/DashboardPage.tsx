import { lazy } from "react";
const LazyContributionStats = lazy(() => import('./components/ContributionStats').then(module =>{
  return { default: module.ContributionStats }
}))

const DashboardPage = () => {
  return (
    <div className="space-y-5 flex flex-col lg:flex-row md:space-y-0">
        <div className="md:flex-grow space-y-5">
            <LazyContributionStats/>
        </div>
    </div>
  )
}

export default DashboardPage
