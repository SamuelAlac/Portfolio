import { Outlet } from "react-router-dom"
import { lazy } from "react"
const LazyThemeProvider = lazy(() => import('@/components/theme-provider').then(module =>{
  return { default: module.ThemeProvider }
}))
const LazySidebarProvider = lazy(() => import('@/components/ui/sidebar').then(module =>{
  return { default: module.SidebarProvider }
}))
const LazyAppSidebar = lazy(() => import('@/components/ui/app-sidebar').then(module =>{
  return { default: module.AppSidebar }
})) 
import { HelmetProvider } from "react-helmet-async"
const LazyNav = lazy(() => import('@/components/Nav').then(module =>{
  return { default: module.Nav }
}))

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-full text-white">
      <LazyThemeProvider>
        <LazySidebarProvider>
          <LazyAppSidebar/>
          
        <main className="w-full flex flex-col bg-[#000319]">
            <HelmetProvider>
            <LazyNav/>
            <div className="[&_section]:bg-gradient-to-r [&_section]:from-[#04071D] [&_section]:to-[#0C0E23] m-3 flex-grow">
              <Outlet/>
            </div>
            </HelmetProvider>
        </main>
        </LazySidebarProvider>
        </LazyThemeProvider>
    </div>
  )
}
