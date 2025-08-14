import { Brain, Rocket, Users, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainLayout } from "@/components/layout/main-layout"

const values = [
  {
    icon: Brain,
    title: "AI-First Innovation",
    description: "We leverage cutting-edge artificial intelligence to revolutionize how presentations are created and designed."
  },
  {
    icon: Rocket,
    title: "Speed & Efficiency",
    description: "Our mission is to help you create professional presentations in minutes, not hours."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Everything we build is designed with our users in mind, making complex tasks simple and intuitive."
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "We believe great presentation tools should be accessible to everyone, everywhere."
  }
]

const stats = [
  { number: "50K+", label: "Presentations Created" },
  { number: "15K+", label: "Active Users" },
  { number: "98%", label: "User Satisfaction" },
  { number: "45+", label: "Countries Served" }
]

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              🚀 Our Mission
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Empowering ideas through{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                intelligent design
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              At AI PPT Forge, we believe that every great idea deserves a stunning presentation. 
              Our mission is to democratize professional design through the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, AI PPT Forge was born from a simple observation: 
                  too many brilliant ideas were being lost in poorly designed presentations. 
                  Our founders, a team of AI researchers and design experts, set out to change that.
                </p>
                <p>
                  We started with a vision to make professional presentation design accessible 
                  to everyone, regardless of their design background or technical expertise. 
                  By combining advanced AI algorithms with intuitive user experience, 
                  we've created a platform that understands your content and brings it to life.
                </p>
                <p>
                  Today, AI PPT Forge is used by professionals, educators, and students 
                  worldwide to create presentations that truly make an impact.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-pulse-slow"></div>
              <Card className="relative bg-gradient-card shadow-accent">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Intelligence</h3>
                    <p className="text-muted-foreground">
                      Our proprietary AI algorithms analyze your content and generate 
                      designs that perfectly match your message and audience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AI PPT Forge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-bounce-gentle">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind AI PPT Forge's innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="text-center group hover:shadow-accent transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Team Member {member}</h3>
                  <p className="text-muted-foreground mb-3">Co-Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">
                    Passionate about making AI accessible to everyone through intuitive design.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}