import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar"
import { AppSidebar } from "@/src/components/ui/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <main className="w-full h-screen overflow-hidden">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}


