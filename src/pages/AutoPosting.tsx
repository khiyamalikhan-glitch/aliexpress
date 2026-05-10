import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Instagram, Youtube, Facebook, Music, FileImage } from "lucide-react"
import toast from "react-hot-toast"

export function AutoPosting() {
  const handleToggle = (platform: string) => {
    toast(`Toggled ${platform} auto-posting`, { icon: '🔄' })
  }

  const platforms = [
    { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-500/10" },
    { name: "TikTok", icon: Music, color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "Facebook", icon: Facebook, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Pinterest", icon: FileImage, color: "text-red-500", bg: "bg-red-500/10" },
    { name: "YouTube", icon: Youtube, color: "text-red-600", bg: "bg-red-600/10" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Auto Posting</h1>
        <p className="text-muted-foreground text-sm">Manage your scheduled posts and multi-platform automation.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="glass lg:col-span-2">
          <CardHeader>
            <CardTitle>Platform Automation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex flex-row items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${platform.bg}`}>
                    <platform.icon className={`w-5 h-5 ${platform.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium">{platform.name}</h4>
                    <p className="text-xs text-muted-foreground">Post Reels/Shorts & format correctly</p>
                  </div>
                </div>
                <div>
                   <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked onChange={() => handleToggle(platform.name)} />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Global Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
               <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Default Time Interval</label>
               <select className="flex h-11 w-full rounded-md border border-white/10 bg-[#18181b] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                <option>Every 2 Hours</option>
                <option>Every 4 Hours</option>
                <option>Twice a Day</option>
                <option>Custom</option>
              </select>
            </div>
            
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-sm">
              <p className="text-primary font-medium mb-1">Queue Status</p>
              <p className="text-foreground text-2xl font-bold">12 <span className="text-sm font-normal text-muted-foreground">posts ready</span></p>
            </div>

            <Button className="w-full h-11" onClick={() => toast.success("Posting started manually")}>
              Force Post Next in Queue
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
