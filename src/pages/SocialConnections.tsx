import { Card, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Instagram, Youtube, Facebook, Music, FileImage } from "lucide-react"

export function SocialConnections() {
  const connections = [
    { name: "Instagram", icon: Instagram, color: "text-pink-500", connected: true, account: "@dealhunter_pro" },
    { name: "TikTok", icon: Music, color: "text-cyan-400", connected: true, account: "@dailydealsxyz" },
    { name: "Facebook", icon: Facebook, color: "text-blue-500", connected: false, account: null },
    { name: "Pinterest", icon: FileImage, color: "text-red-500", connected: false, account: null },
    { name: "YouTube", icon: Youtube, color: "text-red-600", connected: false, account: null },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Social Connections</h1>
        <p className="text-muted-foreground text-sm">Connect your social accounts to enable auto-posting.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {connections.map((conn) => (
          <Card key={conn.name} className="glass relative overflow-hidden">
             {conn.connected && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-500/20 to-transparent flex justify-end items-start p-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1 mt-1 shadow-[0_0_8px_#10b981]"></div>
                </div>
              )}
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${conn.connected ? 'ring-1 ring-emerald-500/30' : ''}`}>
                  <conn.icon className={`w-6 h-6 ${conn.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{conn.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {conn.connected ? 'Connected' : 'Not Connected'}
                  </p>
                </div>
              </div>
              
              {conn.connected ? (
                <div className="space-y-4">
                  <div className="px-3 py-2 bg-white/5 rounded border border-white/5 text-sm font-medium flex justify-between items-center">
                    <span className="text-muted-foreground">Account</span>
                    <span>{conn.account}</span>
                  </div>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30">
                    Disconnect
                  </Button>
                </div>
              ) : (
                <Button className="w-full">
                  Connect {conn.name}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
