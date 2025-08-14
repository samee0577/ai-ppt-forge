import { useState } from "react"
import { Upload, Type, Sparkles, Download, Share, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainLayout } from "@/components/layout/main-layout"

const createOptions = [
  {
    id: "text",
    icon: Type,
    title: "From Text",
    description: "Paste your content and let AI create beautiful slides",
    badge: "Most Popular"
  },
  {
    id: "generate",
    icon: Sparkles,
    title: "Generate from Prompt",
    description: "Describe your presentation and AI will create everything",
    badge: "Recommended"
  },
  {
    id: "upload",
    icon: Upload,
    title: "Import Content",
    description: "Upload documents or files to enhance existing content",
    badge: null
  }
]

const templates = [
  { name: "Business Pitch", category: "Business", color: "from-blue-500 to-purple-600" },
  { name: "Educational", category: "Education", color: "from-green-500 to-teal-600" },
  { name: "Marketing Report", category: "Marketing", color: "from-orange-500 to-red-600" },
  { name: "Product Launch", category: "Product", color: "from-purple-500 to-pink-600" },
  { name: "Financial Review", category: "Finance", color: "from-indigo-500 to-blue-600" },
  { name: "Team Meeting", category: "Internal", color: "from-gray-500 to-slate-600" }
]

export default function Build() {
  const [selectedOption, setSelectedOption] = useState("generate")
  const [content, setContent] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <MainLayout showFooter={false}>
      <div className="min-h-screen bg-muted/30">
        {/* Header */}
        <div className="bg-background border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Create Presentation</h1>
                <p className="text-muted-foreground">
                  How would you like to get started?
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="gradient" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Creation Options */}
            <div className="lg:col-span-2 space-y-6">
              {/* Option Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                {createOptions.map((option) => (
                  <Card 
                    key={option.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-accent hover:-translate-y-1 ${
                      selectedOption === option.id 
                        ? 'ring-2 ring-primary bg-gradient-card' 
                        : 'hover:bg-gradient-card'
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3">
                        <option.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CardTitle className="text-lg">{option.title}</CardTitle>
                        {option.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {option.badge}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm">
                        {option.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Content Input */}
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle>
                    {selectedOption === "text" && "Paste your content"}
                    {selectedOption === "generate" && "Describe your presentation"}
                    {selectedOption === "upload" && "Upload your files"}
                  </CardTitle>
                  <CardDescription>
                    {selectedOption === "text" && "Add your existing content and we'll transform it into beautiful slides"}
                    {selectedOption === "generate" && "Tell us what you want to present and we'll create everything from scratch"}
                    {selectedOption === "upload" && "Upload documents, PDFs, or other content to enhance your presentation"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedOption === "upload" ? (
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">
                        Drag and drop files here or click to browse
                      </p>
                      <Button variant="outline">
                        Choose Files
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Textarea
                        placeholder={
                          selectedOption === "text" 
                            ? "Paste your content here..."
                            : "I want to create a presentation about..."
                        }
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="min-h-[200px] resize-none"
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                          {content.length} / 5000 characters
                        </p>
                        <Button 
                          onClick={handleGenerate}
                          variant="gradient"
                          disabled={!content.trim() || isGenerating}
                          className="min-w-[120px]"
                        >
                          {isGenerating ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Generating...
                            </>
                          ) : (
                            <>
                              <Sparkles className="mr-2 h-4 w-4" />
                              Generate
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Templates & Settings */}
            <div className="space-y-6">
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle>Templates</CardTitle>
                  <CardDescription>
                    Choose a template to get started faster
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {templates.map((template) => (
                      <div
                        key={template.name}
                        className="p-3 rounded-lg border border-border hover:bg-accent cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${template.color} rounded-md flex-shrink-0`}></div>
                          <div>
                            <div className="font-medium group-hover:text-primary transition-colors">
                              {template.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {template.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="style" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="style">Style</TabsTrigger>
                      <TabsTrigger value="content">Content</TabsTrigger>
                    </TabsList>
                    <TabsContent value="style" className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Color Scheme</label>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                          {["blue", "purple", "green", "red"].map((color) => (
                            <div
                              key={color}
                              className={`w-8 h-8 rounded-md cursor-pointer ring-2 ring-transparent hover:ring-border bg-${color}-500`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="content" className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Slide Count</label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Recommended: 8-12 slides
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}