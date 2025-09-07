import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar/>
        <main className="w-full flex flex-col">
            <Navbar/>
            <div className="flex-grow">
              <Outlet/>
            </div>
            <Footer/>
        </main>
        </SidebarProvider>
        </ThemeProvider>
    </div>
  )
}
