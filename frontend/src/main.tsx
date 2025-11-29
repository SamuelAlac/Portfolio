import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
const MainLayout = lazy(() => new Promise<{ default: React.ComponentType<any> }>((resolve) => {
setTimeout(() => {import('@/layouts/MainLayout.tsx').then((module) => { resolve({ default: module.MainLayout }) })}, 1500)}));
import HomePage from './pages/homepage/HomePage.tsx'
import AboutPage from './pages/aboutpage/AboutPage.tsx'
import AchievementsPage from './pages/achievementspage/AchievementsPage.tsx'
import ProjectsPage from './pages/projectspage/ProjectsPage.tsx'
import DashboardPage from './pages/dashboardpage/DashboardPage.tsx'
// import ChatbotPage from './pages/chatbotpage/ChatbotPage.tsx'
import ProjectDetailPage from './pages/projectspage/view/ProjectDetailPage.tsx'
// import BlogPage from './pages/blogpage/BlogPage.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import LoginPage from './pages/loginpage/LoginPage.tsx'
import { Loading } from './pages/Loading.tsx'

const client = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading/>}>
        <MainLayout/>
      </Suspense>
    ),
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
      // {
      //   path: '/Blogs',
      //   element: <BlogPage/>
      // },
      // {
      //   path: '/Chatbot',
      //   element: <ChatbotPage/>
      // },
      {
        path: '/Login',
        element: <LoginPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
      <QueryClientProvider client={client}>
        <Suspense fallback={<div>Initializing app...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
      </Provider>
    </GoogleOAuthProvider>
)
