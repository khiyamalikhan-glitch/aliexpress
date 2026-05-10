import { Bell, Search, User } from "lucide-react"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"

export function Topbar() {
  return (
    <header className="h-16 border-b border-white/10 glass-panel sticky top-0 z-10 flex items-center justify-between px-6">
      <div className="flex items-center w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search products, posts..." 
            className="w-full pl-9 bg-white/5 border-white/10 focus-visible:ring-primary/50 rounded-full"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-white/10">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border border-background"></span>
        </Button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-orange-400 flex items-center justify-center cursor-pointer shadow-lg shadow-primary/20">
          <User className="h-4 w-4 text-white" />
        </div>
      </div>
    </header>
  )
}
