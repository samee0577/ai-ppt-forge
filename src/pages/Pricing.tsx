import { Check, Sparkles, Zap, Crown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MainLayout } from "@/components/layout/main-layout"
import { Link } from "react-router-dom"

const pricingPlans = [
  {
    name: "Free",
    icon: Sparkles,
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI-powered presentations",
    features: [
      "5 presentations per month",
      "Basic AI templates",
      "Standard export (PDF)",
      "Community support",
      "720p resolution",
    ],
    limitations: [
      "Watermark on exports",
      "Limited template library",
      "No collaboration features",
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    icon: Zap,
    price: "$19",
    period: "per month",
    description: "Ideal for professionals and small teams",
    features: [
      "Unlimited presentations",
      "Premium AI templates",
      "All export formats (PPT, PDF, Google Slides)",
      "Priority support",
      "4K resolution",
      "Real-time collaboration",
      "Custom branding",
      "Analytics dashboard",
    ],
    limitations: [],
    buttonText: "Start Pro Trial",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "$99",
    period: "per month",
    description: "Advanced features for large teams and organizations",
    features: [
      "Everything in Pro",
      "Advanced AI customization",
      "SSO integration",
      "Admin dashboard",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Advanced security",
      "Bulk user management",
    ],
    limitations: [],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
  },
]

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing accordingly."
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Yes! Pro plan comes with a 14-day free trial. No credit card required to start."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Absolutely. You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment."
  },
]

export default function Pricing() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              💎 Simple Pricing
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Choose the perfect plan for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                your needs
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Start free and scale as you grow. All plans include our core AI-powered 
              presentation tools with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`group relative hover:shadow-accent transition-all duration-300 hover:-translate-y-2 bg-gradient-card ${
                  plan.popular ? 'ring-2 ring-primary shadow-accent' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-bounce-gentle">
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-5 h-5 bg-muted rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs">−</span>
                        </div>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.buttonVariant}
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-primary' : ''}`}
                    size="lg"
                    asChild
                  >
                    <Link to="/build">
                      {plan.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Compare all features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly what's included in each plan
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-card">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-2">Feature</th>
                      <th className="text-center py-4 px-2">Free</th>
                      <th className="text-center py-4 px-2">
                        <div className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          Pro
                        </div>
                      </th>
                      <th className="text-center py-4 px-2">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Presentations per month", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
                      { feature: "AI Templates", free: "Basic", pro: "Premium", enterprise: "Premium + Custom" },
                      { feature: "Export Formats", free: "PDF", pro: "All", enterprise: "All + API" },
                      { feature: "Resolution", free: "720p", pro: "4K", enterprise: "4K" },
                      { feature: "Collaboration", free: "×", pro: "✓", enterprise: "✓" },
                      { feature: "Custom Branding", free: "×", pro: "✓", enterprise: "✓" },
                      { feature: "Analytics", free: "×", pro: "✓", enterprise: "Advanced" },
                      { feature: "Priority Support", free: "×", pro: "✓", enterprise: "Dedicated" },
                      { feature: "SSO Integration", free: "×", pro: "×", enterprise: "✓" },
                      { feature: "API Access", free: "×", pro: "×", enterprise: "✓" },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-4 px-2 font-medium">{row.feature}</td>
                        <td className="text-center py-4 px-2 text-sm">{row.free}</td>
                        <td className="text-center py-4 px-2 text-sm font-medium">{row.pro}</td>
                        <td className="text-center py-4 px-2 text-sm">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to create amazing presentations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust AI PPT Forge for their 
            presentation needs. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="glass" size="xl">
              <Link to="/build">
                Start Free Trial
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-black">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}