"use client";
import { useState, React } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Logo from "@/components/logo";
import SidebarMenu from "@/components/sidebarMenu";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Montserrat } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import {
  Wand2,
  Music4,
  Mic2,
  Clock,
  Download,
  Menu,
  Search,
} from "lucide-react";
// Load the Google Font
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Generate() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation delay
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <div
      className={`${montserrat.className} min-h-screen bg-zinc-950 text-white`}
    >
      {/* Sidebar */}
      <div>
        {/* Overlay for Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <div
          className={`fixed left-0 top-0 z-50 h-full w-64 bg-zinc-900/95 p-4 overflow-y-auto transition-transform duration-00 lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-6 mt-2 justify-center flex items-center">
            <Logo fontSize="text-[42px]" />
          </div>

          <SidebarMenu />
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="flex items-center justify-between bg-zinc-900/95 p-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>

          <div className="relative w-96">
            <Search className="absolute left-2 top-2.5 h-5 w-5 text-zinc-400" />
            <Input
              className="w-full bg-zinc-800 pl-9 text-white placeholder-zinc-400"
              placeholder="Search For AI Generated Songs, and Top Artists, ..."
            />
          </div>
          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Generate
            </Button>
            <Button className="bg-[--primary] hover:bg-pink-600">
              Get Premium
            </Button>
          </div>
        </header>
        {/* Content Sections */}
        <div className="relative p-8 bg-transparent overflow-hidden">
          {/* Background Floating Blurred Circles */}
          <div className="bg-transparent">
            {/* Hardcoded Randomly Positioned Divs */}
            <div className="absolute top-[100px] left-[150px] h-48 w-32 rounded-full bg-[--primary] blur-3xl opacity-40 animate-float"></div>
            <div className="absolute top-[300px] left-[400px] h-52 w-52 rounded-full bg-[--primary] blur-3xl opacity-30 animate-float"></div>
            <div className="absolute top-[500px] right-[100px] h-24 w-24 rounded-full bg-[--secondary] blur-3xl  animate-float"></div>
            <div className="absolute bottom-[80px] left-[200px] h-20 w-20 rounded-full bg-[--primary] blur-3xl opacity-40 animate-float"></div>
          </div>
          {/* Library Section */}
          <h3 className="text-3xl font-bold text-[--primary] relative z-10 mb-5">
            Generate
          </h3>

          <div className="grid md:grid-cols-[1fr_auto_1fr] grid-cols-1 gap-6">
            {/* Left Section */}
            <div>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div className="space-y-2">
                    <Label>Genre</Label>
                    <Select>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700">
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent className="bg-[--foreground]">
                        <SelectItem value="pop">Pop</SelectItem>
                        <SelectItem value="rock">Rock</SelectItem>
                        <SelectItem value="electronic">Electronic</SelectItem>
                        <SelectItem value="classical">Classical</SelectItem>
                        <SelectItem value="jazz">Jazz</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Instruments</Label>
                    <Select>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700">
                        <SelectValue placeholder="Select primary instrument" />
                      </SelectTrigger>
                      <SelectContent className="bg-[--foreground]">
                        <SelectItem value="piano">Piano</SelectItem>
                        <SelectItem value="guitar">Guitar</SelectItem>
                        <SelectItem value="strings">Strings</SelectItem>
                        <SelectItem value="synth">Synthesizer</SelectItem>
                        <SelectItem value="drums">Drums</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Duration</Label>
                      <span className="text-zinc-400 text-sm">3:30</span>
                    </div>
                    <Slider
                      defaultValue={[210]}
                      max={600}
                      step={1}
                      className="w-full bg-[--primary] rounded"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Tempo (BPM)</Label>
                      <span className="text-zinc-400 text-sm">120</span>
                    </div>
                    <Slider
                      defaultValue={[120]}
                      max={200}
                      step={1}
                      className="w-full bg-[--primary] rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prompt">Describe your song</Label>
                    <textarea
                      id="songDescription"
                      placeholder="A upbeat pop song with electronic elements and energetic vocals..."
                      className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      rows="3"
                    ></textarea>
                </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="bg-zinc-800 border-zinc-700"
                    >
                      <Music4 className="mr-2 h-4 w-4" />
                      Add Reference Track
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-zinc-800 border-zinc-700"
                    >
                      <Mic2 className="mr-2 h-4 w-4" />
                      Record Reference
                    </Button>
                  </div>

                  <Button
                    onClick={handleGenerate}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Generate
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Separator */}
            <Separator
              orientation="vertical"
              className="hidden w-px md:block bg-zinc-700" 
            />

            {/* Right Section */}
            <div>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Recent Generations
                  </h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                            <Music4 className="h-6 w-6 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="font-medium">Generated Track {i}</h3>
                            <p className="text-sm text-zinc-400 flex items-center gap-1">
                              <Clock className="h-3 w-3" /> 3:30
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
