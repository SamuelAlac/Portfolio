import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import HomePage from './pages/homepage/HomePage.tsx'
import AboutPage from './pages/aboutpage/AboutPage.tsx'
import AchievementsPage from './pages/achievementspage/AchievementsPage.tsx'
import ProjectsPage from './pages/projectspage/ProjectsPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: '/About',
        element: <AboutPage/>,
      },
      {
        path: '/Achievements',
        element: <AchievementsPage/>
      },
      {
        path: '/Projects',
        element: <ProjectsPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
