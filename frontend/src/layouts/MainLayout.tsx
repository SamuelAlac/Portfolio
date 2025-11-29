import { Outlet } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { HelmetProvider } from "react-helmet-async"
import { Nav } from "@/components/Nav"

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-full text-white">
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar/>
          
        <main className="w-full flex flex-col bg-[#000319]">
            <HelmetProvider>
            <Nav/>
            <div className="[&_section]:bg-gradient-to-r [&_section]:from-[#04071D] [&_section]:to-[#0C0E23] m-3 flex-grow">
              <Outlet/>
            </div>
            </HelmetProvider>
        </main>
        </SidebarProvider>
        </ThemeProvider>
    </div>
  )
}
