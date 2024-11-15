import { Home, Music2, Compass, Users, Clock, Play, Heart, List, Plus, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SidebarMenu() {
  return (
    <div>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start gap-2 bg-[--primary] text-white hover:text-[--background] hover:bg-[--secondary]">
          <Home className="h-5 w-5" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
          <Music2 className="h-5 w-5" />
          Generate
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
          <Compass className="h-5 w-5" />
          Explore
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
          <Users className="h-5 w-5" />
          Top Artists
        </Button>
      </nav>

      <div className="mt-8">
        <p className="mb-4 text-xs uppercase text-zinc-300">Library</p>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
            <Clock className="h-5 w-5" />
            Recently Generated
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
            <Play className="h-5 w-5" />
            Most Played
          </Button>
        </nav>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-xs uppercase text-zinc-300">Playlist and Favorites</p>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
            <Heart className="h-5 w-5" />
            Your Favorites
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
            <List className="h-5 w-5" />
            Your Playlist
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
            <Plus className="h-5 w-5" />
            Add Playlist
          </Button>
        </nav>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-xs uppercase text-zinc-300">General</p>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:text-[--background] hover:bg-[--secondary]">
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </nav>
      </div>
    </div>
  );
}
