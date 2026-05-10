import { useState } from "react"
import { Card, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Search, Flame, ShoppingBag, ArrowRight, Copy, RefreshCw, X } from "lucide-react"
import toast from "react-hot-toast"

const mockProducts = [
  {
    id: 1,
    title: "Mini Portable Projector 4K Support",
    image: "https://images.unsplash.com/photo-1626307483321-df50bf443fe1?q=80&w=200&auto=format&fit=crop",
    score: 98,
    engagement: "High",
    link: "https://ali.ski/example1",
    price: "$45.99"
  },
  {
    id: 2,
    title: "Ergonomic Laptop Stand Aluminum",
    image: "https://images.unsplash.com/photo-1622322301380-60b6fd58b10e?q=80&w=200&auto=format&fit=crop",
    score: 85,
    engagement: "Medium",
    link: "https://ali.ski/example2",
    price: "$22.50"
  },
  {
    id: 3,
    title: "Wireless Mechanical Keyboard RGB",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=200&auto=format&fit=crop",
    score: 92,
    engagement: "High",
    link: "https://ali.ski/example3",
    price: "$65.00"
  }
]

export function TrendingProducts() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<typeof mockProducts>([])
  const [keyword, setKeyword] = useState("")
  
  // Modal State
  const [selectedProduct, setSelectedProduct] = useState<typeof mockProducts[0] | null>(null)
  const [generating, setGenerating] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!keyword) {
      toast.error("Please enter a keyword")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
      toast.success("Found trending products!")
    }, 1500)
  }

  const handleGenerate = (product: typeof mockProducts[0]) => {
    setSelectedProduct(product)
    setGenerating(true)
    setTimeout(() => {
      setGenerating(false)
      toast.success("Content generated successfully!")
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard!")
  }

  const mockGeneratedContent = {
    instagram: "Upgrade your movie nights universally 🔥🍿 The Mini 4K Projector is finally on sale. Link in bio! #movie #gadgets",
    tiktok: "POV: You found the best mini projector for under $50 🤯 4K supported and portable. #tech #finds",
    facebook: "Tired of watching movies on a small screen? Get this Mini Portable Projector with 4K support today. Limited stock available! Click the link below.",
    pinterest: "Best Mini 4K Portable Projectors Ideas 2024",
    youtube: "Hook: Stop scrolling if you want a massive screen anywhere. Body: This device fits in your hand but projects 4K quality up to 100 inches. Perfect for dorms or camping. CTA: Check the pinned comment for the link!",
    hashtags: "#techgadgets #miniprojector #movienight #aliexpressfinds #musthaves",
    cta: "Shop Now ➡️ [Affiliate Link]"
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Trending Products</h1>
        <p className="text-muted-foreground text-sm">Find high-converting AliExpress products based on social trends.</p>
      </div>

      <Card className="glass">
        <CardContent className="p-6">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="space-y-2 w-full flex-1">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Keyword / Niche</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="e.g. tech gadgets, home decor..." 
                  className="pl-9 h-11 bg-white/5 border-white/10"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2 w-full md:w-48">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Country</label>
              <select className="flex h-11 w-full rounded-md border border-white/10 bg-[#18181b] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="global">Global</option>
              </select>
            </div>

            <Button disabled={loading} className="h-11 px-8 whitespace-nowrap bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              {loading ? (
                <span className="flex items-center">
                  <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                  Searching...
                </span>
              ) : (
                <span className="flex items-center font-medium">
                  Find Trends <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {products.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {products.map((product) => (
            <Card key={product.id} className="glass overflow-hidden group">
              <div className="aspect-video w-full bg-white/5 relative overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10 flex items-center text-xs font-medium text-emerald-400">
                  <Flame className="w-3 h-3 mr-1" /> Score: {product.score}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-muted-foreground font-mono">{product.price}</span>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-foreground/80">
                    Est. {product.engagement} Engagement
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 text-xs h-9 border-white/10 bg-white/5" onClick={() => window.open(product.link, '_blank')}>
                    <ShoppingBag className="w-3 h-3 mr-2" /> View Ali
                  </Button>
                  <Button onClick={() => handleGenerate(product)} className="flex-1 text-xs h-9">
                    Generate Post
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* AI Generator Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#121214] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl scale-in-95 duration-200">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#18181b]/50">
              <h2 className="font-semibold text-lg flex items-center">
                <Flame className="w-5 h-5 text-primary mr-2" /> 
                AI Content Generator
              </h2>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {generating ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                   <div className="w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin mb-4" />
                   <h3 className="text-xl font-medium animate-pulse">Analyzing Product Data...</h3>
                   <p className="text-muted-foreground mt-2">Writing high-converting copy across platforms.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                     <img src={selectedProduct.image} alt="" className="w-16 h-16 rounded object-cover" />
                     <div>
                       <h4 className="font-medium">{selectedProduct.title}</h4>
                       <p className="text-sm text-muted-foreground">Targeting high engagement niches.</p>
                     </div>
                  </div>

                  {Object.entries(mockGeneratedContent).map(([platform, content]) => (
                    <div key={platform} className="space-y-2">
                       <div className="flex justify-between items-center">
                         <label className="text-xs font-semibold text-muted-foreground shadow-sm uppercase tracking-wider">
                           {platform}
                         </label>
                         <button 
                           onClick={() => copyToClipboard(content)}
                           className="text-xs text-muted-foreground hover:text-foreground flex items-center"
                         >
                           <Copy className="w-3 h-3 mr-1" /> Copy
                         </button>
                       </div>
                       <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 text-sm font-mono whitespace-pre-wrap text-foreground/90 leading-relaxed">
                         {content}
                       </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {!generating && (
              <div className="p-4 border-t border-white/10 bg-[#18181b]/50 flex justify-end gap-3">
                 <Button variant="outline" className="border-white/10" onClick={() => handleGenerate(selectedProduct)}>
                   <RefreshCw className="w-4 h-4 mr-2" /> Regenerate
                 </Button>
                 <Button onClick={() => {toast.success("Saved to Drafts"); setSelectedProduct(null)}}>
                   Save & Queue
                 </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
