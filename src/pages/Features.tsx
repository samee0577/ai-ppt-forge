import { Sparkles, Zap, Palette, Users, Download, Globe, Shield, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MainLayout } from "@/components/layout/main-layout"
import { Link } from "react-router-dom"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Design",
    description: "Our advanced AI analyzes your content and automatically generates professional layouts, color schemes, and visual elements that match your message.",
    benefits: ["Smart layout suggestions", "Automatic color matching", "Content-aware design", "Industry-specific templates"]
  },
  {
    icon: Zap,
    title: "Lightning Fast Creation",
    description: "Generate complete presentations in under 60 seconds. Our AI works at superhuman speed to transform your ideas into polished slides.",
    benefits: ["60-second generation", "Real-time editing", "Instant previews", "Quick iterations"]
  },
  {
    icon: Palette,
    title: "Beautiful Templates",
    description: "Choose from hundreds of professionally designed templates, each optimized by AI for maximum visual impact and engagement.",
    benefits: ["500+ templates", "Industry-specific designs", "Customizable themes", "Regular updates"]
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time collaboration, comments, and version control. Perfect for teams of any size.",
    benefits: ["Real-time editing", "Comment system", "Version history", "Role-based access"]
  },
  {
    icon: Download,
    title: "Universal Export",
    description: "Export your presentations to PowerPoint, PDF, Google Slides, or share directly with custom links. Your content, everywhere.",
    benefits: ["PowerPoint export", "PDF generation", "Google Slides sync", "Custom sharing links"]
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Create presentations in over 50 languages with automatic translation and culturally-aware design adjustments.",
    benefits: ["50+ languages", "Auto-translation", "Cultural adaptation", "RTL support"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, enterprise SSO, and advanced privacy controls for your sensitive content.",
    benefits: ["SOC 2 certified", "Enterprise SSO", "Data encryption", "Privacy controls"]
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Edit and present from anywhere with our mobile-optimized interface. Your presentations look great on any device.",
    benefits: ["Mobile editing", "Touch-friendly UI", "Offline access", "Cross-platform sync"]
  }
]

const comparisonFeatures = [
  { feature: "AI-Powered Design", ours: true, competitor1: false, competitor2: false },
  { feature: "60-Second Generation", ours: true, competitor1: false, competitor2: true },
  { feature: "Real-time Collaboration", ours: true, competitor1: true, competitor2: false },
  { feature: "500+ Templates", ours: true, competitor1: false, competitor2: true },
  { feature: "Multi-language Support", ours: true, competitor1: false, competitor2: false },
  { feature: "Universal Export", ours: true, competitor1: true, competitor2: true },
  { feature: "Mobile Editing", ours: true, competitor1: false, competitor2: true },
  { feature: "Enterprise Security", ours: true, competitor1: true, competitor2: false }
]

export default function Features() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              ✨ All Features
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Everything you need to create{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                amazing presentations
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Discover all the powerful features that make AI PPT Forge the most advanced 
              presentation creation platform. From AI-powered design to enterprise security.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-bounce-gentle">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How we compare
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how AI PPT Forge stacks up against the competition.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-card">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-2">Feature</th>
                      <th className="text-center py-4 px-2">
                        <div className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          AI PPT Forge
                        </div>
                      </th>
                      <th className="text-center py-4 px-2 text-muted-foreground">Competitor A</th>
                      <th className="text-center py-4 px-2 text-muted-foreground">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-4 px-2 font-medium">{row.feature}</td>
                        <td className="text-center py-4 px-2">
                          {row.ours ? (
                            <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                              <span className="text-white text-sm">✓</span>
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                              <span className="text-white text-sm">✗</span>
                            </div>
                          )}
                        </td>
                        <td className="text-center py-4 px-2">
                          {row.competitor1 ? (
                            <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                              <span className="text-white text-sm">✓</span>
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                              <span className="text-white text-sm">✗</span>
                            </div>
                          )}
                        </td>
                        <td className="text-center py-4 px-2">
                          {row.competitor2 ? (
                            <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                              <span className="text-white text-sm">✓</span>
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                              <span className="text-white text-sm">✗</span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to experience the future of presentations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Try all these powerful features today and see why thousands of professionals 
            choose AI PPT Forge for their presentation needs.
          </p>
          <Button asChild variant="glass" size="xl">
            <Link to="/build">
              Start Creating Now
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}