import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainLayout } from './layouts/MainLayout.tsx'
import HomePage from './pages/homepage/HomePage.tsx'
import AboutPage from './pages/aboutpage/AboutPage.tsx'
import AchievementsPage from './pages/achievementspage/AchievementsPage.tsx'
import ProjectsPage from './pages/projectspage/ProjectsPage.tsx'
import DashboardPage from './pages/dashboardpage/DashboardPage.tsx'
import ChatbotPage from './pages/chatbotpage/ChatbotPage.tsx'
import ProjectDetailPage from './pages/projectspage/view/ProjectDetailPage.tsx'
import BlogPage from './pages/blogpage/BlogPage.tsx'

const client = new QueryClient();
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
        path: '/Dashboard',
        element: <DashboardPage/>
      },
      {
        path: '/Achievements',
        element: <AchievementsPage/>
      },
      {
        path: '/Projects',
        children: [
          { index: true, element: <ProjectsPage/> },
          { path: ':repo', element: <ProjectDetailPage/> }
        ]
      },
      {
        path: '/Blogs',
        element: <BlogPage/>
      },
      {
        path: '/Chatbot',
        element: <ChatbotPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
