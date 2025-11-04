'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Lightbulb } from 'lucide-react';
import { useTheme } from '../lib/theme-context';
import { Button } from './ui/button';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-[var(--card)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6C00] to-[#002244] flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl">Virtual Shark Tank</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/') && pathname === '/'
                  ? 'text-[#FF6C00]' 
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/startups"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/startups')
                  ? 'text-[#FF6C00]' 
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              Startups
            </Link>
            <Link
              href="/leaderboard"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/leaderboard')
                  ? 'text-[#FF6C00]' 
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              Leaderboard
            </Link>
            <Link
              href="/pitch-room"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/pitch-room')
                  ? 'text-[#FF6C00]' 
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              Pitch Room
            </Link>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full border-[var(--border)] hover:bg-[var(--muted)]"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
