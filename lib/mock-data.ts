export interface Startup {
  id: string;
  name: string;
  founder: string;
  founderEmail: string;
  founderLinkedIn: string;
  logo: string;
  domain: string;
  stage: string;
  summary: string;
  problem: string;
  solution: string;
  market: string;
  fundingAsk: string;
  aiScore: number;
  scoreBreakdown: {
    innovation: number;
    feasibility: number;
    financials: number;
    impact: number;
  };
}

export const mockStartups: Startup[] = [
  {
    id: '1',
    name: 'FinFlow AI',
    founder: 'Priya Sharma',
    founderEmail: 'priya@finflow.ai',
    founderLinkedIn: 'https://linkedin.com/in/priyasharma',
    logo: '💳',
    domain: 'FinTech',
    stage: 'Series A',
    summary: 'AI-powered financial planning and investment platform for millennials',
    problem: 'Young professionals struggle with complex financial decisions and lack personalized guidance',
    solution: 'An AI chatbot that analyzes spending patterns, suggests investments, and automates savings',
    market: 'India\'s millennial population of 440M with growing disposable income',
    fundingAsk: '₹5 Cr',
    aiScore: 94,
    scoreBreakdown: {
      innovation: 95,
      feasibility: 90,
      financials: 92,
      impact: 98
    }
  },
  {
    id: '2',
    name: 'EcoChain',
    founder: 'Rahul Mehta',
    founderEmail: 'rahul@ecochain.io',
    founderLinkedIn: 'https://linkedin.com/in/rahulmehta',
    logo: '♻️',
    domain: 'Sustainability',
    stage: 'Seed',
    summary: 'Blockchain-based carbon credit marketplace for businesses',
    problem: 'Companies lack transparent and efficient ways to offset their carbon footprint',
    solution: 'A decentralized platform connecting carbon credit buyers with verified offset projects',
    market: 'Global carbon credit market worth $850B by 2027',
    fundingAsk: '₹3 Cr',
    aiScore: 89,
    scoreBreakdown: {
      innovation: 92,
      feasibility: 85,
      financials: 87,
      impact: 93
    }
  },
  {
    id: '3',
    name: 'HealthSync',
    founder: 'Dr. Anjali Patel',
    founderEmail: 'anjali@healthsync.in',
    founderLinkedIn: 'https://linkedin.com/in/anjalipatel',
    logo: '🏥',
    domain: 'HealthTech',
    stage: 'Pre-Seed',
    summary: 'Unified health records platform connecting hospitals and patients',
    problem: 'Fragmented medical records lead to inefficient care and repeated tests',
    solution: 'Secure cloud platform aggregating health data from multiple providers with AI insights',
    market: 'India healthcare IT market projected at $11B by 2025',
    fundingAsk: '₹2 Cr',
    aiScore: 87,
    scoreBreakdown: {
      innovation: 88,
      feasibility: 82,
      financials: 85,
      impact: 92
    }
  },
  {
    id: '4',
    name: 'AgriBot',
    founder: 'Vikram Singh',
    founderEmail: 'vikram@agribot.in',
    founderLinkedIn: 'https://linkedin.com/in/vikramsingh',
    logo: '🌾',
    domain: 'AgriTech',
    stage: 'Seed',
    summary: 'IoT-powered precision farming solution for small and medium farmers',
    problem: 'Farmers lack real-time data on soil health, weather, and crop conditions',
    solution: 'Affordable IoT sensors with mobile app providing actionable farming insights',
    market: '146M farmers in India, 86% with less than 2 hectares',
    fundingAsk: '₹4 Cr',
    aiScore: 91,
    scoreBreakdown: {
      innovation: 89,
      feasibility: 90,
      financials: 88,
      impact: 97
    }
  },
  {
    id: '5',
    name: 'EduVerse',
    founder: 'Neha Gupta',
    founderEmail: 'neha@eduverse.in',
    founderLinkedIn: 'https://linkedin.com/in/nehagupta',
    logo: '📚',
    domain: 'EdTech',
    stage: 'Series A',
    summary: 'Metaverse-based immersive learning platform for K-12 students',
    problem: 'Traditional education methods fail to engage digital-native students',
    solution: 'VR/AR powered virtual classrooms with gamified learning experiences',
    market: 'India EdTech market to reach $30B by 2031',
    fundingAsk: '₹6 Cr',
    aiScore: 86,
    scoreBreakdown: {
      innovation: 94,
      feasibility: 78,
      financials: 84,
      impact: 88
    }
  },
  {
    id: '6',
    name: 'SmartLogix',
    founder: 'Arjun Reddy',
    founderEmail: 'arjun@smartlogix.io',
    founderLinkedIn: 'https://linkedin.com/in/arjunreddy',
    logo: '📦',
    domain: 'Logistics',
    stage: 'Seed',
    summary: 'AI-driven last-mile delivery optimization platform',
    problem: 'High delivery costs and inefficient routing plague logistics companies',
    solution: 'Machine learning algorithms optimizing routes, reducing costs by 30%',
    market: 'India logistics market worth $380B, growing at 10% CAGR',
    fundingAsk: '₹3.5 Cr',
    aiScore: 88,
    scoreBreakdown: {
      innovation: 86,
      feasibility: 91,
      financials: 90,
      impact: 85
    }
  },
  {
    id: '7',
    name: 'RentalPro',
    founder: 'Kavya Iyer',
    founderEmail: 'kavya@rentalpro.in',
    founderLinkedIn: 'https://linkedin.com/in/kavyaiyer',
    logo: '🏠',
    domain: 'PropTech',
    stage: 'Pre-Seed',
    summary: 'Digital platform simplifying rental agreements and tenant verification',
    problem: 'Rental transactions involve paperwork, fraud risks, and disputes',
    solution: 'End-to-end digital rental platform with blockchain-verified agreements',
    market: '11M rental households in urban India',
    fundingAsk: '₹2.5 Cr',
    aiScore: 83,
    scoreBreakdown: {
      innovation: 80,
      feasibility: 88,
      financials: 82,
      impact: 82
    }
  },
  {
    id: '8',
    name: 'CyberShield',
    founder: 'Aditya Malhotra',
    founderEmail: 'aditya@cybershield.io',
    founderLinkedIn: 'https://linkedin.com/in/adityamalhotra',
    logo: '🔒',
    domain: 'CyberSecurity',
    stage: 'Series A',
    summary: 'AI-powered threat detection for SMEs and startups',
    problem: 'Small businesses lack affordable enterprise-grade cybersecurity',
    solution: 'Automated threat detection and response system at SME-friendly pricing',
    market: '63M MSMEs in India vulnerable to cyber attacks',
    fundingAsk: '₹5.5 Cr',
    aiScore: 90,
    scoreBreakdown: {
      innovation: 91,
      feasibility: 89,
      financials: 91,
      impact: 89
    }
  }
];

export const domains = ['All', 'FinTech', 'Sustainability', 'HealthTech', 'AgriTech', 'EdTech', 'Logistics', 'PropTech', 'CyberSecurity'];
export const stages = ['All', 'Pre-Seed', 'Seed', 'Series A'];
