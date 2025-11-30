import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
const MainLayout = lazy(() => new Promise<{ default: React.ComponentType<any> }>((resolve) => {
setTimeout(() => {import('@/layouts/MainLayout.tsx').then((module) => { resolve({ default: module.MainLayout }) })}, 1500)}));
// import ChatbotPage from './pages/chatbotpage/ChatbotPage.tsx'
// import BlogPage from './pages/blogpage/BlogPage.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
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
        lazy: async () =>{
          const homePage = await import('./pages/homepage/HomePage.tsx')
          return { Component: homePage.default }
        }
      },
      {
        path: '/About',
        lazy: async () =>{
          const aboutPage = await import('./pages/aboutpage/AboutPage.tsx')
          return { Component: aboutPage.default }
        }
      },
      {
        path: '/Dashboard',
        lazy: async () =>{
          const dashboardPage = await import('./pages/dashboardpage/DashboardPage.tsx')
          return { Component: dashboardPage.default }
        }
      },
      {
        path: '/Achievements',
        lazy: async () =>{
          const achievementsPage = await import ('./pages/achievementspage/AchievementsPage.tsx')
          return { Component: achievementsPage.default }
        }
      },
      {
        path: '/Projects',
        children: [
          { index: true, 
            lazy: async () =>{
              const projectsPage = await import('./pages/projectspage/ProjectsPage.tsx')
              return { Component: projectsPage.default }
            }
          },
          { path: ':repo', 
            lazy: async () =>{
              const projectDetailPage = await import('./pages/projectspage/view/ProjectDetailPage.tsx')
              return { Component: projectDetailPage.default }
            }
          }
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
        lazy: async () =>{
          const loginPage = await import('./pages/loginpage/LoginPage.tsx')
          return { Component: loginPage.default }
        }
      },
      {
        path: '*',
        lazy: async () =>{
          const notFoundPage = await import('./pages/NotFoundPage.tsx')
          return { Component: notFoundPage.default }
        }
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
