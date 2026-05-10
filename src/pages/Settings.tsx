import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import toast from "react-hot-toast"

export function Settings() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Settings saved successfully!")
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-muted-foreground text-sm">Configure your API keys and default application preferences.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-3xl">
        <Card className="glass">
          <CardHeader>
            <CardTitle>API Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Gemini API Key</label>
              <Input type="password" placeholder="AIZA..." defaultValue="AIZA-mock-key-for-dev" />
              <p className="text-xs text-muted-foreground">Required for content generation (installed via AI Studio env).</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">OpenAI API Key (Optional)</label>
              <Input type="password" placeholder="sk-..." />
              <p className="text-xs text-muted-foreground">Alternative model for specific post styles.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">AliExpress Affiliate ID</label>
              <Input placeholder="aliexpress affiliate tracking id" defaultValue="ali_auto_2024" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Global Posting Defaults</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
              <label className="text-sm font-medium">Default Language</label>
              <select className="flex h-10 w-full rounded-md border border-white/10 bg-[#18181b] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                <option value="en">English (US)</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Default Call-To-Action (CTA) Text</label>
              <Input placeholder="Link in bio!" defaultValue="🔥 Link in bio to get yours before it sells out!" />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" className="w-full md:w-auto h-11 px-8">Save Settings</Button>
        </div>
      </form>
    </div>
  )
}
