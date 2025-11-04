'use client';

import Link from 'next/link';
import { Sparkles, TrendingUp, Award } from 'lucide-react';
import { Button } from './ui/button';

export function HomePage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6C00]/10 via-transparent to-[#002244]/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 108, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 34, 68, 0.1) 0%, transparent 50%)`
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--muted)] border border-[var(--border)]">
              <Sparkles className="w-4 h-4 text-[#FF6C00]" />
              <span className="text-sm">India's Premier Virtual Pitching Platform</span>
            </div>

            <h1 className="bg-gradient-to-r from-[#FF6C00] to-[#002244] bg-clip-text text-transparent">
              Virtual Shark Tank
            </h1>

            <p className="text-xl md:text-2xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Pitch. Score. Invest.
            </p>

            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Connect innovative startups with visionary investors through our AI-powered platform. 
              Get real-time scoring, detailed analytics, and make informed investment decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/startups">
                <Button className="bg-[#FF6C00] hover:bg-[#FF6C00]/90 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  View Startups
                </Button>
              </Link>
              <Link href="/leaderboard">
                <Button
                  variant="outline"
                  className="border-[#002244] text-[#002244] dark:border-[#FF6C00] dark:text-[#FF6C00] hover:bg-[var(--muted)] px-8 py-6 rounded-xl transition-all"
                >
                  Leaderboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--card)] p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6C00] to-[#FF6C00]/70 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-4">AI-Powered Scoring</h3>
              <p className="text-[var(--muted-foreground)]">
                Advanced algorithms evaluate startups across innovation, feasibility, financials, and impact metrics.
              </p>
            </div>

            <div className="bg-[var(--card)] p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#002244] to-[#002244]/70 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-4">Real-Time Analytics</h3>
              <p className="text-[var(--muted-foreground)]">
                Track startup performance, market trends, and investment opportunities with live data visualization.
              </p>
            </div>

            <div className="bg-[var(--card)] p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6C00] to-[#002244] flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-4">Competitive Rankings</h3>
              <p className="text-[var(--muted-foreground)]">
                Discover top-performing startups through our comprehensive leaderboard and scoring system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF6C00] to-[#002244] bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-[var(--muted-foreground)]">Startups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF6C00] to-[#002244] bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-[var(--muted-foreground)]">Investors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF6C00] to-[#002244] bg-clip-text text-transparent mb-2">
                ₹150Cr+
              </div>
              <div className="text-[var(--muted-foreground)]">Funded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF6C00] to-[#002244] bg-clip-text text-transparent mb-2">
                85%
              </div>
              <div className="text-[var(--muted-foreground)]">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
