
import { AppWindow, Home, UsersRound } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from './ui/sidebar'

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Our Projects",
    url: "#",
    icon: AppWindow,
  },
  {
    title: "About Us",
    url: "#",
    icon: UsersRound,
  },
  
]


const SidebarApp = () => {
  return (
    
 <Sidebar className='bg-secondary'>
      <SidebarHeader className='mx-auto'>
        <h1> RiseTek</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    
      
  )
}

export default SidebarApp