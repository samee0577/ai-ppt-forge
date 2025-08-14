import { Link } from "react-router-dom"
import { ArrowRight, Sparkles, Zap, Target, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainLayout } from "@/components/layout/main-layout"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Design",
    description: "Let our advanced AI create stunning presentation layouts tailored to your content."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate professional presentations in seconds, not hours."
  },
  {
    icon: Target,
    title: "Smart Templates",
    description: "Choose from hundreds of AI-optimized templates for any industry or use case."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together in real-time with your team members and stakeholders."
  }
]

const benefits = [
  "Professional-grade presentations",
  "30+ industry templates",
  "Real-time collaboration", 
  "Export to PowerPoint & PDF",
  "Smart content suggestions",
  "Brand consistency tools"
]

export default function Landing() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 sm:py-32 lg:py-40">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              ✨ Now with GPT-4 powered design
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Create{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-slow">
                stunning
              </span>{" "}
              presentations with AI
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into professional presentations in seconds. 
              Our AI understands your content and creates beautiful, engaging slides automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild variant="hero" size="xl">
                <Link to="/build">
                  Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Free to try • No credit card required • 2 minutes to wow
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why choose AI PPT Forge?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by cutting-edge AI to make presentation creation effortless and professional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-accent transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-bounce-gentle">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Everything you need to create{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  amazing presentations
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From initial concept to final presentation, our AI-powered platform provides 
                all the tools you need to create professional, engaging slide decks.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild variant="gradient" size="lg">
                <Link to="/build">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-pulse-slow"></div>
              <Card className="relative bg-gradient-card shadow-accent">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-secondary rounded-full w-3/4"></div>
                    <div className="h-4 bg-muted rounded-full w-1/2"></div>
                    <div className="h-32 bg-gradient-primary rounded-lg opacity-20"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-muted rounded-lg"></div>
                      <div className="h-20 bg-muted rounded-lg"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to transform your presentations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who create stunning presentations with AI PPT Forge.
          </p>
          <Button asChild variant="glass" size="xl">
            <Link to="/build">
              Start Creating for Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}