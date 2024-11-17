"use client"
import { React, useState } from "react";
import { Search, Home, Music2, Compass, Users, Clock, Play, Heart, List, Plus, Settings, LogOut, Menu, Music, Zap, BarChart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Logo from "@/components/logo";
import SidebarMenu from "@/components/sidebarMenu";
import { Montserrat } from "next/font/google";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Load the Google Font
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Component() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`${montserrat.className} min-h-screen bg-zinc-950 text-white`}>
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
          className={`fixed left-0 top-0 z-50 h-full w-64 bg-zinc-900/95 p-4 overflow-y-auto transition-transform duration-00 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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

          <div className="relative w-96 ms-4">
            <Search className="absolute left-2 top-2.5 h-5 w-5 text-zinc-400" />
            <Input
              className="w-full bg-zinc-800 pl-9 text-white placeholder-zinc-400"
              placeholder="Search For AI Generated Songs, and Top Artists, ..."
            />
          </div>
          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">Generate</Button>
            <Button className="bg-[--primary] hover:bg-pink-600">Get Premium</Button>
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


          <Card className="bg-zinc-900 border-zinc-800 mb-4">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Tracks Generated</CardTitle>
                  <Music className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-zinc-400">+20% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">10,567</div>
                  <p className="text-xs text-zinc-400">+5% from last week</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Listening Time</CardTitle>
                  <Clock className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45,678 hrs</div>
                  <p className="text-xs text-zinc-400">+15% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">AI Model Performance</CardTitle>
                  <Zap className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98.5%</div>
                  <p className="text-xs text-zinc-400">+2% improvement</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 relative aspect-video rounded-lg overflow-hidden flex justify-center">
              <img
                src="/placeholder_girl.png"
                alt="AI Music Generation Visualization"
                className="rounded-lg h-full aspect-square"
              />
            </div>
          </div>
        </CardContent>
      </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Top Genres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Pop', 'Rock', 'Electronic', 'Hip Hop', 'Jazz'].map((genre, index) => (
                    <div key={genre} className="flex items-center">
                      <div className="w-36 text-sm">{genre}</div>
                      <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500"
                          style={{ width: `${100 - index * 15}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-right text-sm">{100 - index * 15}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Trending Tracks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-600/20 rounded-md flex items-center justify-center">
                          <Music className="h-4 w-4 text-purple-400" />
                        </div>
                        <div>
                          <div className="font-medium">AI Generated Hit {i}</div>
                          <div className="text-xs text-zinc-400">SangeetAI</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
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
  );
}
