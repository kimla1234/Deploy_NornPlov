import { ArrowLeft, Bot } from "lucide-react"
import chat from "@/public/chat/chat.png"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from "@/src/components/ui/sidebar"
import { Button } from "./button"
import Image from "next/image"

// Menu items.
const items = [
    {
        title: "Chat 1",
        url: "#",
        icon: Bot,
        date: "12-May-2024"
    },
    {
        title: "Chat 2",
        url: "#",
        icon: Bot,
        date: "12-May-2024"
    },
    {
        title: "Chat 3",
        url: "#",
        icon: Bot,
        date: "12-May-2024"
    }

]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem className="flex mb-2">
                                <Button variant="outline" size="icon" className="bg-primary bg-opacity-10 border-none  hover:bg-opacity-20 hover:bg-primary rounded-full shadow-none" ><ArrowLeft color="#0BBB8A" /></Button>

                                <div className="flex gap-1 items-center ml-8">
                                    <p className="text-lg font-semibold" >Message</p>
                                    <div className="w-6 h-6 flex justify-center items-center  rounded-full text-xs font-normal bg-primary bg-opacity-10 text-primary  " >14</div>
                                </div>

                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <a href={item.url}>

                                        <div className="flex items-start gap-4 p-4 hover:bg-primary hover:bg-opacity-10">
                                            <Image src={chat} alt="chat image" width={36} height={36} className="rounded-xl" />


                                            <div className="flex flex-col">
                                                <span className="text-base font-semibold">{item.title}</span>
                                                <span className="text-xs text-gray-400">{item.date}</span>
                                            </div>
                                        </div>


                                    </a>
                                  
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
