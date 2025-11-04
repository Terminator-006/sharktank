'use client';

import Link from 'next/link';
import { Trophy, TrendingUp } from 'lucide-react';
import { mockStartups } from '../lib/mock-data';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export function LeaderboardPage() {
  const sortedStartups = [...mockStartups].sort((a, b) => b.aiScore - a.aiScore);

  const getMedalEmoji = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return null;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-yellow-600';
      case 2: return 'from-gray-300 to-gray-500';
      case 3: return 'from-orange-400 to-orange-600';
      default: return 'from-[#FF6C00] to-[#002244]';
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-10 h-10 text-[#FF6C00]" />
            <h2>Startup Leaderboard</h2>
          </div>
          <p className="text-[var(--muted-foreground)]">
            Top-ranked startups based on AI scoring across innovation, feasibility, financials, and impact
          </p>
        </div>

        {/* Top 3 Podium - Mobile Friendly */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sortedStartups.slice(0, 3).map((startup, index) => {
            const rank = index + 1;
            const medal = getMedalEmoji(rank);
            
            return (
              <Link key={startup.id} href={`/startups/${startup.id}`}>
                <div
                  className={`bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 hover:shadow-lg transition-all cursor-pointer ${
                    rank === 1 ? 'md:order-2 md:scale-105' : rank === 2 ? 'md:order-1' : 'md:order-3'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3">{medal}</div>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${getRankColor(rank)} text-white font-bold mb-4`}>
                      #{rank}
                    </div>
                    <div className="text-4xl mb-3">{startup.logo}</div>
                    <h4 className="mb-2">{startup.name}</h4>
                    <p className="text-sm text-[var(--muted-foreground)] mb-3">{startup.founder}</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      <Badge variant="secondary">{startup.domain}</Badge>
                      <Badge variant="outline">{startup.stage}</Badge>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6C00] to-[#002244] text-white">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-bold">{startup.aiScore}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">Rank</TableHead>
                  <TableHead>Startup</TableHead>
                  <TableHead>Founder</TableHead>
                  <TableHead>Domain</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead className="text-center">AI Score</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedStartups.map((startup, index) => {
                  const rank = index + 1;
                  const medal = getMedalEmoji(rank);

                  return (
                    <TableRow key={startup.id} className="hover:bg-[var(--muted)]">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {medal && <span className="text-2xl">{medal}</span>}
                          <span className="font-medium">#{rank}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{startup.logo}</span>
                          <span className="font-medium">{startup.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{startup.founder}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{startup.domain}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{startup.stage}</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-gradient-to-r from-[#FF6C00] to-[#002244] text-white border-0">
                          {startup.aiScore}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={`/startups/${startup.id}`}>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 text-center">
            <div className="text-3xl font-bold text-[#FF6C00] mb-1">
              {sortedStartups[0].aiScore}
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">Top Score</div>
          </div>
          <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 text-center">
            <div className="text-3xl font-bold text-[#002244] dark:text-[#FF6C00] mb-1">
              {Math.round(sortedStartups.reduce((acc, s) => acc + s.aiScore, 0) / sortedStartups.length)}
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">Avg Score</div>
          </div>
          <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 text-center">
            <div className="text-3xl font-bold text-[#FF6C00] mb-1">
              {sortedStartups.length}
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">Total Startups</div>
          </div>
          <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 text-center">
            <div className="text-3xl font-bold text-[#002244] dark:text-[#FF6C00] mb-1">
              {sortedStartups.filter(s => s.aiScore >= 90).length}
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">Score 90+</div>
          </div>
        </div>
      </div>
    </div>
  );
}
