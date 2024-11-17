"use client"
import { React, useState } from "react";
import { Search, Menu, Bell, Lock, Volume2, Palette, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Image from "next/image";
import Logo from "@/components/logo";
import SidebarMenu from "@/components/sidebarMenu";
import { Montserrat } from "next/font/google";
import { Card, CardContent, CardHeader, CardTitle,CardDescription } from "@/components/ui/card"

// Load the Google Font
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Component() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
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
          className={`  fixed left-0 top-0 z-50 h-full w-64 bg-zinc-900/95 p-4 overflow-y-auto transition-transform duration-00 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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


          <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Enable Notifications</Label>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Notifications</Label>
              <Input
                id="email"
                placeholder="your@email.com"
                className="bg-zinc-800 border-zinc-700"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Privacy
            </CardTitle>
            <CardDescription>Manage your privacy settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="public-profile">Public Profile</Label>
              <Switch id="public-profile"/>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="share-listening">Share Listening Activity</Label>
              <Switch id="share-listening"/>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5" />
              Audio Settings
            </CardTitle>
            <CardDescription>Customize your audio experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Audio Quality</Label>
              <Select>
                <SelectTrigger className="bg-zinc-800 border-zinc-700 ">
                  <SelectValue placeholder="Select quality" />
                </SelectTrigger>
                <SelectContent className="bg-[--primary]">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="ultra">Ultra</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Crossfade</Label>
              <Slider defaultValue={[5]} max={12} step={1} className="w-full" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Appearance
            </CardTitle>
            <CardDescription>Customize the app&apos;s appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
            <div className="space-y-2">
              <Label>Theme Color</Label>
              <Select>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent className="bg-[--primary]">
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Language and Region
            </CardTitle>
            <CardDescription>Set your preferred language and region</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Language</Label>
                <Select>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-[--primary]">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Region</Label>
                <Select>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent className="bg-[--primary]">
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="eu">European Union</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
        </div>


      </div>
    </div>
  );
}
