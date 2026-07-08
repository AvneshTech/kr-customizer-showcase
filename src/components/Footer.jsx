import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 text-[#33305c] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1a1640] via-[#4f46e5] to-[#06b6d4] p-0.5 shadow-sm flex items-center justify-center">
                <div className="w-full h-full bg-[#1a1640] rounded-[9px] flex items-center justify-center">
                  <span className="text-white font-black text-base tracking-tighter">K</span>
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-black text-[#1a1640] tracking-tight lowercase">kr</span>
                <span className="text-lg font-normal text-[#33305c] tracking-tight lowercase ml-1">customizer</span>
              </div>
            </a>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              KR Customizer delivers smart product customizer software for online stores in Toronto, Ontario, and key U.S. markets like Texas, Ohio, and Missouri.
            </p>
          </div>

          {/* Col 2: Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#1a1640] uppercase tracking-wider">Features</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><a href="#features" className="hover:text-[#4f46e5] transition-colors">Real-Time Customization</a></li>
              <li><a href="#features" className="hover:text-[#4f46e5] transition-colors">2D and 3D Views</a></li>
              <li><a href="#features" className="hover:text-[#4f46e5] transition-colors">No-Code Setup</a></li>
              <li><a href="#categories" className="hover:text-[#4f46e5] transition-colors">Product Catalogs</a></li>
            </ul>
          </div>

          {/* Col 3: Markets */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#1a1640] uppercase tracking-wider">Markets</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><a href="#results" className="hover:text-[#4f46e5] transition-colors">Toronto & Ontario</a></li>
              <li><a href="#results" className="hover:text-[#4f46e5] transition-colors">Texas & Ohio</a></li>
              <li><a href="#results" className="hover:text-[#4f46e5] transition-colors">Missouri & Midwest</a></li>
              <li><a href="#results" className="hover:text-[#4f46e5] transition-colors">North America</a></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#1a1640] uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><a href="#faqs" className="hover:text-[#4f46e5] transition-colors">FAQs</a></li>
              <li><a href="#results" className="hover:text-[#4f46e5] transition-colors">Case Studies</a></li>
              <li><a href="#hero" className="hover:text-[#4f46e5] transition-colors">Book Free Demo</a></li>
              <li><a href="#hero" className="hover:text-[#4f46e5] transition-colors">Get Started Free</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 KR Customizer Software. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Submitted for Kushel Digi Solutions Frontend Evaluation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
