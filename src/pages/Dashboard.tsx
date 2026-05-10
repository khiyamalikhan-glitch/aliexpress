import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { BarChart3, TrendingUp, CalendarDays, Share2, ArrowUpRight } from "lucide-react"

const stats = [
  {
    title: "Total Posts Created",
    value: "1,284",
    change: "+12.5%",
    trend: "up",
    icon: BarChart3,
  },
  {
    title: "Scheduled Posts",
    value: "42",
    change: "+4.1%",
    trend: "up",
    icon: CalendarDays,
  },
  {
    title: "Trending Products Found",
    value: "8,392",
    change: "+22.4%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Active Connections",
    value: "4/5",
    change: "0%",
    trend: "neutral",
    icon: Share2,
  },
]

export function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Overview of your affiliate marketing automation.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass group hover:bg-white/[0.05] transition-colors duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                {stat.trend === "up" && <ArrowUpRight className="h-3 w-3 text-emerald-500 mr-1" />}
                <span className={stat.trend === "up" ? "text-emerald-500 font-medium" : ""}>
                  {stat.change}
                </span>
                <span className="ml-1 opacity-70">from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="glass lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent AI Generations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center mr-4">
                    <TrendingUp className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Wireless Earbuds Pro Post</p>
                    <p className="text-xs text-muted-foreground">Generated 2 caption variations + hashtags</p>
                  </div>
                  <div className="text-xs text-muted-foreground">2 hrs ago</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass lg:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Scheduled Posts</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="flex flex-col items-center justify-center py-8 text-center">
               <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                 <CalendarDays className="h-6 w-6 text-muted-foreground" />
               </div>
               <p className="text-sm font-medium">No posts scheduled for today</p>
               <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">Find trending products to start generating content.</p>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
