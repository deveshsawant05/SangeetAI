import { useRouter } from "next/navigation"; // Correct import for useRouter
import Link from "next/link";
import {
  Home,
  Music2,
  Compass,
  Users,
  Clock,
  Play,
  Heart,
  List,
  Plus,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SidebarMenu() {
  const { pathname } = useRouter();

  // Function to check if a path is active
  const isActive = (path) => {
    // For "/dashboard" we treat it as "Home"
    if (path === "/dashboard" && (pathname === "/dashboard")) {
      return true;
    }
    // For all other paths, match them exactly
    return pathname === path;
  };

  return (
    <div>
      <nav className="space-y-2">
        <Link href="/dashboard">
          <Button
            variant="ghost"
            className={`w-full justify-start gap-2 ${
              isActive("/dashboard")
                ? "bg-[--primary] text-white"
                : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
            }`}
          >
            <Home className="h-5 w-5" />
            Home
          </Button>
        </Link>
        <Link href="/generate">
          <Button
            variant="ghost"
            className={`w-full justify-start gap-2 ${
              isActive("/generate")
                ? "bg-[--primary] text-white"
                : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
            }`}
          >
            <Music2 className="h-5 w-5" />
            Generate
          </Button>
        </Link>
        <Link href="/explore">
          <Button
            variant="ghost"
            className={`w-full justify-start gap-2 ${
              isActive("/explore")
                ? "bg-[--primary] text-white"
                : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
            }`}
          >
            <Compass className="h-5 w-5" />
            Explore
          </Button>
        </Link>
        <Link href="/top-artists">
          <Button
            variant="ghost"
            className={`w-full justify-start gap-2 ${
              isActive("/top-artists")
                ? "bg-[--primary] text-white"
                : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
            }`}
          >
            <Users className="h-5 w-5" />
            Top Artists
          </Button>
        </Link>
      </nav>

      <div className="mt-8">
        <p className="mb-4 text-xs uppercase text-zinc-300">Library</p>
        <nav className="space-y-2">
          <Link href="/recently-generated">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-2 ${
                isActive("/recently-generated")
                  ? "bg-[--primary] text-white"
                  : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
              }`}
            >
              <Clock className="h-5 w-5" />
              Recently Generated
            </Button>
          </Link>
          <Link href="/most-played">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-2 ${
                isActive("/most-played")
                  ? "bg-[--primary] text-white"
                  : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
              }`}
            >
              <Play className="h-5 w-5" />
              Most Played
            </Button>
          </Link>
        </nav>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-xs uppercase text-zinc-300">Playlist and Favorites</p>
        <nav className="space-y-2">
          <Link href="/favorites">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-2 ${
                isActive("/favorites")
                  ? "bg-[--primary] text-white"
                  : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
              }`}
            >
              <Heart className="h-5 w-5" />
              Your Favorites
            </Button>
          </Link>
          <Link href="/your-playlist">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-2 ${
                isActive("/your-playlist")
                  ? "bg-[--primary] text-white"
                  : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
              }`}
            >
              <List className="h-5 w-5" />
              Your Playlist
            </Button>
          </Link>
          <Link href="/add-playlist">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-2 ${
                isActive("/add-playlist")
                  ? "bg-[--primary] text-white"
                  : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
              }`}
            >
              <Plus className="h-5 w-5" />
              Add Playlist
            </Button>
          </Link>
        </nav>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-xs uppercase text-zinc-300">General</p>
        <nav className="space-y-2">
          <Link href="/settings">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-2 ${
                isActive("/settings")
                  ? "bg-[--primary] text-white"
                  : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
              }`}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-2 ${
                isActive("/logout")
                  ? "bg-[--primary] text-white"
                  : "text-zinc-400 hover:text-[--background] hover:bg-[--secondary]"
              }`}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
