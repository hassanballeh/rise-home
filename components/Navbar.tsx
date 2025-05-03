"use client"
import Link from "next/link"
import { Button } from "./ui/button"

import { SidebarIcon } from "lucide-react"
import { useSidebar } from "./ui/sidebar"

const Navbar = () => {
    const { toggleSidebar} = useSidebar()
  return (
      <header className="flex justify-between bg-primary text-white py-2 px-3"> 
          <div className="flex justify-between gap-2">
            <Button  onClick={toggleSidebar} >
                  <SidebarIcon     />

            </Button>
            <Link href={'/'} className="flex items-center">
              RiseTek
            </Link>
          </div>
          
          <div className="flex justify-between gap-2">
              <Button variant={"link"} asChild>
                  <Link className="text-white" href={'/'}>Projects</Link>
              </Button>
              
              <Button variant={"link"} asChild>
                  <Link className="text-white" href={'/'}>About Us</Link>
              </Button>
              <Button variant={"link"} asChild>
                  <Link className="text-white" href={'/'}>Contact Us</Link>
              </Button>
          </div>
          
    </header>
  )
}

export default  Navbar