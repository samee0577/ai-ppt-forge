import { useState } from "react"
import { Upload, Type, Sparkles, Download, Share, Eye, Zap, Lightbulb, Presentation, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MainLayout } from "@/components/layout/main-layout"

const demoOptions = [
  "Create a pitch deck for a SaaS startup",
  "Marketing presentation for Q4 results",
  "Educational slides about climate change",
  "Product launch presentation",
  "Team meeting overview slides"
]

export default function Build() {
  const [content, setContent] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    if (!content.trim()) return
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  const handleDemoClick = (demo) => {
    setContent(demo)
  }

  return (
    <MainLayout showFooter={false}>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        {/* Header */}
        <div className="bg-background/80 backdrop-blur-sm border-b border-border/50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">AI Presentation Builder</h1>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button variant="ghost" size="sm">
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="default" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center px-4 py-12 max-w-4xl mx-auto">
          {/* Hero Section */}
          {/* <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text text-transparent">
              Create Amazing Presentations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Describe your presentation idea and let AI create beautiful, professional slides in seconds
            </p>
          </div> */}

          {/* Main Input Card */}
          <Card className="w-full max-w-3xl bg-gray/70 backdrop-blur-sm shadow-xl mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Textarea
                  placeholder="Describe your presentation idea... e.g., 'Create a pitch deck for my eco-friendly packaging startup focusing on sustainability and market opportunity'"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="text-base border-0 focus:outline-none focus-visible:ring-0"
                  style={{
                    height: content ? Math.max(70, Math.min(300, content.split('\n').length * 24 + 96)) : 70
                  }}
                />

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-6">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Header
                    </Button>
                    {/* <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Type className="mr-2 h-4 w-4" />
                      From text
                    </Button> */}
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-muted-foreground">
                      {content.length}/2000
                    </span>
                    <Button
                      onClick={handleGenerate}
                      disabled={!content.trim() || isGenerating}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 min-w-[140px]"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Create Slides
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Options */}
          <div className="w-full max-w-3xl mb-8">
            <p className="text-sm font-medium text-muted-foreground mb-4 text-center">
              Try these examples:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {demoOptions.map((demo, index) => (
                <button
                  key={index}
                  onClick={() => handleDemoClick(demo)}
                  className="px-4 py-2 bg-white/80 hover:bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 hover:shadow-md hover:scale-105"
                >
                  {demo}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Pills */}
          {/* <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-2xl">
            <div className="flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">
              <Zap className="mr-1.5 h-3 w-3" />
              AI-Powered
            </div>
            <div className="flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
              <Lightbulb className="mr-1.5 h-3 w-3" />
              Smart Templates
            </div>
            <div className="flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">
              <Presentation className="mr-1.5 h-3 w-3" />
              Professional Design
            </div>
            <div className="flex items-center px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm">
              <BarChart3 className="mr-1.5 h-3 w-3" />
              Data Visualization
            </div>
          </div> */}

          {/* Help Text */}
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl">
            The more detailed your description, the better your presentation will be. Include your topic, audience, key points, and desired style.
          </p>
        </div>
      </div>
    </MainLayout>
  )
}