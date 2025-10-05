import { ChartNoAxesCombined, Home, UserRound, Trophy, FolderOpen, CircleUserRound, Bot } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "../mode-toggle"
import { Profile } from "../profile"
import { NavLink } from "react-router-dom"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/About",
    icon: UserRound,
  },
  {
    title: "Dashboard",
    url: "/Dashboard",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Achievements",
    url: "/Achievements",
    icon: Trophy,
  },
  {
    title: "Projects",
    url: "/Projects",
    icon: FolderOpen,
  },
  {
    title: "Contact Me",
    url: "/",
    icon: CircleUserRound,
  },
  {
    title: "Blogs",
    url: "/Blogs",
    icon: Bot
  },
]

export function AppSidebar() {
  return (
    <Sidebar  variant="floating">
      <SidebarContent>
        <SidebarGroup className="space-y-5">
          <Profile/>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
              <ModeToggle/>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}