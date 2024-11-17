"use client";
import { React, useState } from "react";
import {
  Search,
  Home,
  Music2,
  Compass,
  Users,
  List,
  Plus,
  Settings,
  LogOut,
  Menu,
  Play,
  SkipForward,
  Heart,
  Clock,
  Music,
  Mic,
  Headphones,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Logo from "@/components/logo";
import SidebarMenu from "@/components/sidebarMenu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Montserrat } from "next/font/google";

// Load the Google Font
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function ExplorePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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
        <div className="relative p-8 bg-transparent overflow-hidden h-full">
          {/* Background Floating Blurred Circles */}
          <div className="bg-transparent">
            {/* Hardcoded Randomly Positioned Divs */}
            <div className="absolute top-[100px] left-[150px] h-48 w-32 rounded-full bg-[--primary] blur-3xl opacity-40 animate-float"></div>
            <div className="absolute top-[300px] left-[400px] h-52 w-52 rounded-full bg-[--primary] blur-3xl opacity-30 animate-float"></div>
            <div className="absolute top-[500px] right-[100px] h-24 w-24 rounded-full bg-[--secondary] blur-3xl  animate-float"></div>
            <div className="absolute bottom-[80px] left-[200px] h-20 w-20 rounded-full bg-[--primary] blur-3xl opacity-40 animate-float"></div>
          </div>

          <h3 className="text-3xl font-bold text-[--primary] relative z-10 mb-2">
            Explore
          </h3>

          <Card className="bg-zinc-900 border-zinc-800 mb-4">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Top Trending Tracks</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Music className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">AI Generated Hit {i}</h3>
                    <p className="text-sm text-zinc-400">SangeetAI</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-zinc-400">3:30</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800 mb-4">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Top Genres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Pop', 'Rock', 'Electronic', 'Hip Hop', 'Jazz', 'Classical'].map((genre) => (
              <Card key={genre} className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-colors">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{genre}</h3>
                    <p className="text-sm text-zinc-400">Explore AI-generated {genre} tracks</p>
                  </div>
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <Music className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Moods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Energetic', 'Relaxing', 'Focus', 'Workout', 'Party', 'Chill'].map((mood) => (
              <Card key={mood} className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-colors">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{mood}</h3>
                    <p className="text-sm text-zinc-400">AI-curated {mood.toLowerCase()} playlist</p>
                  </div>
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                    {mood === 'Energetic' && <Zap className="h-8 w-8 text-purple-400" />}
                    {mood === 'Relaxing' && <Headphones className="h-8 w-8 text-purple-400" />}
                    {mood === 'Focus' && <Mic className="h-8 w-8 text-purple-400" />}
                    {mood === 'Workout' && <Zap className="h-8 w-8 text-purple-400" />}
                    {mood === 'Party' && <Music className="h-8 w-8 text-purple-400" />}
                    {mood === 'Chill' && <Headphones className="h-8 w-8 text-purple-400" />}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>


        </div>
      </div>
    </div>
  );
}
