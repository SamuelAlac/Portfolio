import { Outlet } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar/>
        <main className="w-full flex flex-col">
            <Navbar/>
            <div className="[&_section]:bg-[#18181B] m-3 flex-grow">
              <Outlet/>
            </div>
        </main>
        </SidebarProvider>
        </ThemeProvider>
    </div>
  )
}
