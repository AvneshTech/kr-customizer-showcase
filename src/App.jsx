import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TopFeatures from './components/TopFeatures';
import ResultsSection from './components/ResultsSection';
import WhyDifferent from './components/WhyDifferent';
import CategoriesGrid from './components/CategoriesGrid';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#33305c] flex flex-col selection:bg-[#ffd600] selection:text-[#1a1640]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TopFeatures />
        <ResultsSection />
        <WhyDifferent />
        <CategoriesGrid />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
