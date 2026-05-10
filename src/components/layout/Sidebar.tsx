import { NavLink } from "react-router-dom"
import { 
  LayoutDashboard, 
  TrendingUp, 
  Send, 
  Link as LinkIcon, 
  Settings,
  Bot
} from "lucide-react"
import { cn } from "../../lib/utils"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: TrendingUp, label: "Trending Products", path: "/trending" },
  { icon: Send, label: "Auto Posting", path: "/posting" },
  { icon: LinkIcon, label: "Connections", path: "/connections" },
  { icon: Settings, label: "Settings", path: "/settings" },
]

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 glass-panel flex-shrink-0 flex flex-col h-full sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <Bot className="w-6 h-6 text-primary mr-2" />
        <span className="font-bold text-lg tracking-tight text-gradient">ALI-AUTO-AI</span>
      </div>
      
      <nav className="p-4 space-y-1 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
              isActive 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn(
                  "w-5 h-5 mr-3 transition-colors", 
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} />
                {item.label}
                {isActive && (
                  <div className="absolute left-0 top-1 bottom-1 w-1 bg-primary rounded-r-md shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
          <h4 className="text-sm font-semibold mb-2">Pro Plan Valid</h4>
          <p className="text-xs text-muted-foreground mb-3">API Limit: 232/1000 today</p>
          <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
            <div className="bg-gradient-to-r from-primary to-orange-400 h-1.5 rounded-full" style={{ width: '23%' }}></div>
          </div>
        </div>
      </div>
    </aside>
  )
}
