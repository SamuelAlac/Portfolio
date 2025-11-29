import { ChartNoAxesCombined, Home, UserRound, Trophy, FolderOpen } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar"
import { Profile } from "../profile"
import { NavLink } from "react-router-dom"

// Menu items.
const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/About", icon: UserRound },
  { title: "Dashboard", url: "/Dashboard", icon: ChartNoAxesCombined },
  { title: "Achievements", url: "/Achievements", icon: Trophy },
  { title: "Projects", url: "/Projects", icon: FolderOpen },
  // { title: "Blogs", url: "/Blogs", icon: BookText },
  // { title: "Chatbot", url: "/Chatbot", icon: Bot },
]

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="bg-[#04071D] bg-clip-text text-transparent">
      <SidebarContent>
        <SidebarGroup className="space-y-5">
          <Profile />
          <SidebarGroupContent className="flex flex-col gap-2">
            {items.map((item) => (
              <NavLink
                key={item.title} to={item.url} end className={({ isActive }) =>
                `text-white flex items-center gap-2 p-2 rounded-md transition-colors ${isActive ? "bg-white/10 font-bold" : "hover:bg-white/5"}`}>
                <item.icon />
                <span>{item.title}</span>
              </NavLink>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
