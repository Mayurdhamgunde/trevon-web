import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { VideoWalkthrough } from './sections/VideoWalkthrough';
import { HowItWorks } from './sections/HowItWorks';
import { Features } from './sections/Features';
import { AISection } from './sections/AISection';
import { Roles } from './sections/Roles';
import { Utilities } from './sections/Utilities';
import { CTA } from './sections/CTA';
import AnalyticsDashboard from './pages/AnalyticsDashboard';

/** Main landing page — wrapped by Navbar + Footer */
function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-[#111827] transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <VideoWalkthrough />
        <HowItWorks />
        <Features />
        <AISection />
        <Roles />
        <Utilities />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Public landing page ── */}
        <Route path="/" element={<LandingPage />} />

        {/* ── Management / Analytics portal ── */}
        <Route path="/analytics" element={<AnalyticsDashboard />} />

        {/* Alias: /management-portal → same dashboard */}
        <Route path="/management-portal" element={<AnalyticsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
