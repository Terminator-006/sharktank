'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, Linkedin, Bookmark, FileText } from 'lucide-react';
import { mockStartups, type Startup } from '../lib/mock-data';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface PitchDetailsPageProps {
  startupId: string;
}

export function PitchDetailsPage({ startupId }: PitchDetailsPageProps) {
  const startup = mockStartups.find(s => s.id === startupId);

  if (!startup) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <div className="text-center">
          <h3 className="mb-2">Startup not found</h3>
          <Link href="/startups">
            <Button>Back to Startups</Button>
          </Link>
        </div>
      </div>
    );
  }

  const radarData = [
    { subject: 'Innovation', value: startup.scoreBreakdown.innovation, fullMark: 100 },
    { subject: 'Feasibility', value: startup.scoreBreakdown.feasibility, fullMark: 100 },
    { subject: 'Financials', value: startup.scoreBreakdown.financials, fullMark: 100 },
    { subject: 'Impact', value: startup.scoreBreakdown.impact, fullMark: 100 },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/startups">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Startups
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-8">
              <div className="flex items-start gap-6">
                <div className="text-6xl">{startup.logo}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h2>{startup.name}</h2>
                    <Badge className="bg-gradient-to-r from-[#FF6C00] to-[#002244] text-white border-0 text-lg px-4 py-1">
                      AI Score: {startup.aiScore}
                    </Badge>
                  </div>
                  <p className="text-[var(--muted-foreground)] mb-4">
                    {startup.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{startup.domain}</Badge>
                    <Badge variant="outline">{startup.stage}</Badge>
                    <Badge className="bg-[#FF6C00] text-white border-0">
                      Seeking: {startup.fundingAsk}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-8">
              <h3 className="mb-4">The Problem</h3>
              <p className="text-[var(--muted-foreground)] mb-6">
                {startup.problem}
              </p>

              <h3 className="mb-4">Our Solution</h3>
              <p className="text-[var(--muted-foreground)]">
                {startup.solution}
              </p>
            </div>

            {/* Market Opportunity */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-8">
              <h3 className="mb-4">Market Opportunity</h3>
              <p className="text-[var(--muted-foreground)]">
                {startup.market}
              </p>
            </div>

            {/* Founder Info */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-8">
              <h3 className="mb-4">Founder</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium mb-1">{startup.founder}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">Founder & CEO</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => window.open(`mailto:${startup.founderEmail}`, '_blank')}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => window.open(startup.founderLinkedIn, '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Score Breakdown */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 sticky top-24">
              <h4 className="mb-6">AI Score Breakdown</h4>

              {/* Radar Chart */}
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="var(--border)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: 'var(--foreground)', fontSize: 12 }}
                    />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }} />
                    <Radar
                      name="Score"
                      dataKey="value"
                      stroke="#FF6C00"
                      fill="#FF6C00"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Innovation</span>
                    <span className="text-sm font-medium">{startup.scoreBreakdown.innovation}/100</span>
                  </div>
                  <Progress value={startup.scoreBreakdown.innovation} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Feasibility</span>
                    <span className="text-sm font-medium">{startup.scoreBreakdown.feasibility}/100</span>
                  </div>
                  <Progress value={startup.scoreBreakdown.feasibility} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Financials</span>
                    <span className="text-sm font-medium">{startup.scoreBreakdown.financials}/100</span>
                  </div>
                  <Progress value={startup.scoreBreakdown.financials} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Impact</span>
                    <span className="text-sm font-medium">{startup.scoreBreakdown.impact}/100</span>
                  </div>
                  <Progress value={startup.scoreBreakdown.impact} className="h-2" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-[#FF6C00] hover:bg-[#FF6C00]/90 text-white">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Shortlist Startup
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Add Investor Notes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
