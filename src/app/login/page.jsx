'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Logo from "@/components/logo"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Montserrat } from "next/font/google"
import Spline from "@splinetool/react-spline"
import { Facebook, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Load the Google Font
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter();

  return (
    <div className={`${montserrat.className} bg-[--background] text-[--foreground] relative h-screen overflow-hidden w-full flex items-center justify-center`}>
      <div className="absolute inset-0 z-0 h-full">
        <main className='h-full'>
          <Spline
            scene="https://prod.spline.design/aK3Ma9dLD8MBQOIN/scene.splinecode" 
            className="h-[90vh] object-cover"
          />
        </main>
      </div>
      <Card className="text-[--foreground] w-full max-w-md z-10 bg-[--background]/80 backdrop-blur-md bg-violet-300 bg-opacity-20 m-5">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Logo fontSize="text-3xl sm:text-5xl md:text-6xl lg:text-7xl"/>
          </div>
          <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center font-bold">Login to SangeetAI</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e)=>{
              e.preventDefault();
              router.push("/dashboard")
            }} 
          className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-xs sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-xs sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe} 
                  onCheckedChange={(checked) => setRememberMe(checked)}
                  style={{ color: 'var(--foreground)' }}
                />
                <label htmlFor="remember" className="text-xs sm:text-sm md:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember Me
                </label>
              </div>
              <Link href="/forgot-password" className="text-xs sm:text-sm md:text-base text-[--primary] hover:underline">
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="w-full text-md bg-[--primary] transition duration-300 border-2 hover:text-[--secondary] border-[--primary] hover:bg-[--primary] hover:border-[--secondary] hover:border-2">
              Sign In
            </Button>
          </form>
          <div className="relative my-4 text-[--foreground]">
            <div className="relative flex justify-center text-sm sm:text-sm md:text-base uppercase">
              <span className="bg-opacity-100 bg px-2 text-muted-foreground z-10">Or With</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-[--foreground]">
            <Button variant="outline" className="w-full text-xs sm:text-sm md:text-base">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" className="w-full text-xs sm:text-sm md:text-base">
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="mt-4 text-center text-xs sm:text-sm md:text-base text-[--foreground]">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-[--primary] hover:underline">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
