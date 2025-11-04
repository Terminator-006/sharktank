'use client';

import { useState } from 'react';
import { Video, MessageSquare, Send, Users, Clock } from 'lucide-react';
import { mockStartups } from '../lib/mock-data';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { ScrollArea } from './ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function PitchRoomPage() {
  const [selectedStartup, setSelectedStartup] = useState(mockStartups[0].id);
  const [chatMessage, setChatMessage] = useState('');
  const [innovation, setInnovation] = useState([75]);
  const [feasibility, setFeasibility] = useState([75]);
  const [financials, setFinancials] = useState([75]);
  const [impact, setImpact] = useState([75]);

  const startup = mockStartups.find(s => s.id === selectedStartup);

  const mockMessages = [
    { id: 1, user: 'Investor A', message: 'Great pitch! What are your customer acquisition costs?', time: '10:23 AM' },
    { id: 2, user: 'Investor B', message: 'Impressive market research. How do you plan to scale?', time: '10:25 AM' },
    { id: 3, user: 'Investor C', message: 'What\'s your current monthly revenue?', time: '10:27 AM' },
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // In a real app, this would send the message
      setChatMessage('');
    }
  };

  if (!startup) return null;

  const avgScore = Math.round((innovation[0] + feasibility[0] + financials[0] + impact[0]) / 4);

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="mb-2">Live Pitch Room</h2>
            <p className="text-[var(--muted-foreground)]">
              Watch pitches and evaluate startups in real-time
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-red-500 text-white border-0 px-3 py-1">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
              LIVE
            </Badge>
            <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
              <Users className="w-4 h-4" />
              <span className="text-sm">127 watching</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video & Info Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Startup Selector */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-4">
              <Select value={selectedStartup} onValueChange={setSelectedStartup}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {mockStartups.map(s => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.logo} {s.name} - {s.founder}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Video Player */}
            <div className="glass-effect rounded-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[#002244] to-[#FF6C00]/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                <div className="relative z-10 text-center">
                  <Video className="w-20 h-20 text-white/80 mx-auto mb-4" />
                  <p className="text-white text-lg">Video Pitch Simulation</p>
                  <p className="text-white/60 text-sm mt-2">In a live version, the pitch video would play here</p>
                </div>
                
                {/* Live Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm">LIVE</span>
                </div>

                {/* Timer */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">15:42</span>
                </div>
              </div>
            </div>

            {/* Startup Info */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6">
              <div className="flex items-start gap-4">
                <div className="text-5xl">{startup.logo}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3>{startup.name}</h3>
                      <p className="text-[var(--muted-foreground)]">{startup.founder}</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-[#FF6C00] to-[#002244] text-white border-0">
                      {startup.domain}
                    </Badge>
                  </div>
                  <p className="text-[var(--muted-foreground)] mb-4">
                    {startup.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{startup.stage}</Badge>
                    <Badge className="bg-[#FF6C00] text-white border-0">
                      Seeking: {startup.fundingAsk}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Chat */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] overflow-hidden">
              <div className="bg-gradient-to-r from-[#FF6C00] to-[#002244] text-white p-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <h5>Investor Chat</h5>
                </div>
              </div>

              <ScrollArea className="h-64 p-4">
                <div className="space-y-4">
                  {mockMessages.map(msg => (
                    <div key={msg.id} className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-medium text-sm">{msg.user}</span>
                        <span className="text-xs text-[var(--muted-foreground)]">{msg.time}</span>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)]">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t border-[var(--border)]">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    className="bg-[#FF6C00] hover:bg-[#FF6C00]/90 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Scoring Panel */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6">
              <div className="flex items-center justify-between mb-6">
                <h5>Your Score</h5>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6C00] to-[#002244] bg-clip-text text-transparent">
                  {avgScore}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Innovation</span>
                    <span className="text-sm font-medium text-[#FF6C00]">{innovation[0]}</span>
                  </div>
                  <Slider
                    value={innovation}
                    onValueChange={setInnovation}
                    max={100}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Feasibility</span>
                    <span className="text-sm font-medium text-[#FF6C00]">{feasibility[0]}</span>
                  </div>
                  <Slider
                    value={feasibility}
                    onValueChange={setFeasibility}
                    max={100}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Financials</span>
                    <span className="text-sm font-medium text-[#FF6C00]">{financials[0]}</span>
                  </div>
                  <Slider
                    value={financials}
                    onValueChange={setFinancials}
                    max={100}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Impact</span>
                    <span className="text-sm font-medium text-[#FF6C00]">{impact[0]}</span>
                  </div>
                  <Slider
                    value={impact}
                    onValueChange={setImpact}
                    max={100}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-[#FF6C00] to-[#002244] text-white hover:opacity-90">
                Submit Score
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
