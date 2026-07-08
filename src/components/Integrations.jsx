import React from 'react';
import { integrationPartners } from '../data/mockData';
import { Code, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Integrations() {
  return (
    <section className="py-20 bg-slate-900/30 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Partner Marquee / Grid */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-slate-400 block mb-6">
            Seamless 1-Click Integration With Your Favorite E-Commerce Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {integrationPartners.map((partner, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold text-sm transition-all shadow-md flex items-center gap-2"
              >
                <span>{partner.logo}</span>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Developer / Easy SDK Preview Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-slate-800/80 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-400">
                <Code className="w-3.5 h-3.5" />
                <span>Developer Friendly</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Embed in 3 Lines of Code</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you use Shopify Liquid, React, Next.js, or Vue, embedding our interactive 3D studio is as simple as adding a script tag.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  <span>Automatic responsive scaling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  <span>Real-time cart webhook sync</span>
                </div>
              </div>
            </div>

            {/* Right Code Block Preview */}
            <div className="md:col-span-7">
              <div className="rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden shadow-2xl font-mono text-xs">
                {/* Code window bar */}
                <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px]">ProductPage.jsx</span>
                  </div>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>

                {/* Code snippet */}
                <div className="p-5 text-slate-300 space-y-2 overflow-x-auto">
                  <p className="text-slate-500">// 1. Import CustomCraft Pro SDK</p>
                  <p><span className="text-purple-400">import</span> <span className="text-brand-300">{`{ CustomCraftWidget }`}</span> <span className="text-purple-400">from</span> <span className="text-emerald-300">'@customcraft/sdk-react'</span>;</p>
                  <p className="text-slate-500 pt-2">// 2. Render Interactive Studio on Product Page</p>
                  <p><span className="text-purple-400">export default function</span> <span className="text-blue-400">ProductPage</span>({`{ product }`}) {`{`}</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                  <p className="pl-8">&lt;<span className="text-brand-400">CustomCraftWidget</span></p>
                  <p className="pl-12 text-slate-400">productId=<span className="text-emerald-300">"aero-stride-x1"</span></p>
                  <p className="pl-12 text-slate-400">theme=<span className="text-emerald-300">"dark"</span></p>
                  <p className="pl-12 text-slate-400">onCartAdd={<span className="text-amber-300">(customOrder) =&gt; syncWithShopify(customOrder)</span>}</p>
                  <p className="pl-8">/&gt;</p>
                  <p className="pl-4">);</p>
                  <p>{`}`}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
