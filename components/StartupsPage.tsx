'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import { mockStartups, domains, stages, type Startup } from '../lib/mock-data';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function StartupsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');

  const filteredStartups = mockStartups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         startup.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         startup.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = selectedDomain === 'All' || startup.domain === selectedDomain;
    const matchesStage = selectedStage === 'All' || startup.stage === selectedStage;
    
    return matchesSearch && matchesDomain && matchesStage;
  });

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mb-2">Browse Startups</h2>
          <p className="text-[var(--muted-foreground)]">
            Discover innovative startups seeking investment
          </p>
        </div>

        {/* Filters */}
        <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
              <Input
                placeholder="Search startups, founders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger>
                <SelectValue placeholder="Select domain" />
              </SelectTrigger>
              <SelectContent>
                {domains.map(domain => (
                  <SelectItem key={domain} value={domain}>
                    {domain}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger>
                <SelectValue placeholder="Select stage" />
              </SelectTrigger>
              <SelectContent>
                {stages.map(stage => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-[var(--muted-foreground)]">
            Showing {filteredStartups.length} {filteredStartups.length === 1 ? 'startup' : 'startups'}
          </p>
          {(selectedDomain !== 'All' || selectedStage !== 'All' || searchQuery) && (
            <Button
              variant="ghost"
              onClick={() => {
                setSearchQuery('');
                setSelectedDomain('All');
                setSelectedStage('All');
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Startup Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map(startup => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>

        {filteredStartups.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="mb-2">No startups found</h3>
            <p className="text-[var(--muted-foreground)]">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function StartupCard({ startup }: { startup: Startup }) {
  return (
    <Link href={`/startups/${startup.id}`}>
      <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 hover:shadow-lg transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{startup.logo}</div>
        <Badge
          className="bg-gradient-to-r from-[#FF6C00] to-[#002244] text-white border-0"
        >
          Score: {startup.aiScore}
        </Badge>
      </div>

      <h4 className="mb-2 group-hover:text-[#FF6C00] transition-colors">{startup.name}</h4>
      
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="secondary">{startup.domain}</Badge>
        <Badge variant="outline">{startup.stage}</Badge>
      </div>

      <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2">
        {startup.summary}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
        <div>
          <p className="text-xs text-[var(--muted-foreground)]">Founder</p>
          <p className="text-sm font-medium">{startup.founder}</p>
        </div>
        <Button
          size="sm"
          className="bg-[#002244] hover:bg-[#002244]/90 text-white"
        >
          View Pitch
        </Button>
      </div>
      </div>
    </Link>
  );
}
