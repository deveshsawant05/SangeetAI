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


      </div>
    </div>
  );
}
