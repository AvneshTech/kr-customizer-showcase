import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RotateCcw, ShoppingBag, Eye, ShieldCheck, ArrowRight, Layers, Type } from 'lucide-react';
import { configuratorProducts } from '../data/mockData';

export default function HeroConfigurator() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const currentProduct = configuratorProducts[selectedProductIndex];

  // Configurator state
  const [selectedColor, setSelectedColor] = useState(currentProduct.colors[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(currentProduct.materials[0]);
  const [selectedAccent, setSelectedAccent] = useState(currentProduct.accents[0]);
  const [customText, setCustomText] = useState('CUSTOM PRO');
  const [isRotating, setIsRotating] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Switch product reset state
  const handleProductSwitch = (index) => {
    setSelectedProductIndex(index);
    const p = configuratorProducts[index];
    setSelectedColor(p.colors[0]);
    setSelectedMaterial(p.materials[0]);
    setSelectedAccent(p.accents[0]);
    setAddedToCart(false);
  };

  const totalPrice = currentProduct.basePrice + selectedColor.priceMod + selectedMaterial.priceMod + selectedAccent.priceMod;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3500);
  };

  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
      {/* Background ambient light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-accent-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-brand-400 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Next-Gen 3D & 2D Product Configurator SaaS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Turn E-Commerce Browsers into <span className="bg-gradient-to-r from-brand-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Instant Buyers</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Empower shoppers to personalize colors, materials, and custom engravings in real-time. Boost your store conversion rates by <span className="text-white font-semibold">48%</span> while eliminating costly returns.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 text-slate-950 font-bold text-base shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800/80 text-slate-200 font-semibold text-base border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5 text-slate-400" />
                <span>See How It Works</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>1-Click Shopify & Woo Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Zero Coding Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Print-Ready CAD Export</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Product Configurator Widget */}
          <div className="lg:col-span-6">
            <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border-slate-800 shadow-2xl">
              
              {/* Widget Header & Category Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Live Interactive Configurator</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-0.5">{currentProduct.name}</h3>
                </div>

                {/* Category Selector Tabs */}
                <div className="flex bg-slate-950/80 p-1 rounded-xl border border-slate-800/80">
                  {configuratorProducts.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => handleProductSwitch(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedProductIndex === idx
                          ? 'bg-gradient-to-r from-brand-500 to-emerald-600 text-slate-950 shadow-md font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {p.id === 'sneaker' ? 'Sneaker' : p.id === 'watch' ? 'Watch' : 'Hoodie'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Visual Preview Box */}
              <div className="my-6 relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 border border-slate-800/60 overflow-hidden flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px] group">
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />
                
                {/* Product Image with Simulation Effects */}
                <div 
                  className={`relative z-10 transition-all duration-700 transform ${
                    isRotating ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                  }`}
                >
                  <img
                    src={currentProduct.imagePreview}
                    alt={currentProduct.name}
                    className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-2xl border-2 transition-all duration-300"
                    style={{ borderColor: selectedColor.hex }}
                  />

                  {/* Simulated Custom Engraving Overlay */}
                  {customText && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-slate-950/90 backdrop-blur-md border border-brand-500/50 text-brand-400 text-xs font-mono font-bold tracking-widest uppercase shadow-lg">
                      {customText}
                    </div>
                  )}
                </div>

                {/* Floating Controls Overlay */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                  <button
                    onClick={() => setIsRotating(!isRotating)}
                    className="p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shadow-md"
                    title="Simulate 3D Rotation"
                  >
                    <RotateCcw className={`w-4 h-4 ${isRotating ? 'animate-spin text-brand-400' : ''}`} />
                  </button>
                </div>

                {/* Active Selections Badge */}
                <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-xs text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedColor.hex }} />
                  <span>{selectedColor.name} • {selectedMaterial.name.split(' ')[0]}</span>
                </div>
              </div>

              {/* Customization Controls Panel */}
              <div className="space-y-5">
                
                {/* 1. Color Swatches */}
                <div>
                  <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-2">
                    <span>1. Base Color</span>
                    <span className="text-brand-400 font-semibold">{selectedColor.name} {selectedColor.priceMod > 0 ? `(+${selectedColor.priceMod})` : ''}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {currentProduct.colors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedColor(c)}
                        className={`w-8 h-8 rounded-full transition-all flex items-center justify-center ${
                          selectedColor.id === c.id
                            ? 'ring-2 ring-brand-400 ring-offset-2 ring-offset-slate-950 scale-110'
                            : 'hover:scale-105 opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* 2. Material / Finish Selector */}
                <div>
                  <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-2">
                    <span>2. Material & Finish</span>
                    <span className="text-brand-400 font-semibold">{selectedMaterial.name} {selectedMaterial.priceMod > 0 ? `(+${selectedMaterial.priceMod})` : ''}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentProduct.materials.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedMaterial(m)}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          selectedMaterial.id === m.id
                            ? 'bg-brand-500/10 border-brand-500 text-white font-medium shadow-sm'
                            : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex justify-between items-center text-xs">
                          <span className="truncate">{m.name}</span>
                          {m.priceMod > 0 && <span className="text-brand-400 font-semibold ml-1">+${m.priceMod}</span>}
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5 truncate">{m.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Custom Monogram / Text Engraving */}
                <div>
                  <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Type className="w-3.5 h-3.5 text-brand-400" />
                      <span>3. Custom Monogram / Engraving</span>
                    </span>
                    <span className="text-slate-500 text-[10px]">Free Customization</span>
                  </div>
                  <input
                    type="text"
                    maxLength={14}
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value.toUpperCase())}
                    placeholder="ENTER TEXT (MAX 14 CHARS)"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all uppercase tracking-widest placeholder:text-slate-600"
                  />
                </div>

                {/* Live Price Footer & Add to Cart */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Total Configured Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white">${totalPrice}</span>
                      <span className="text-xs text-brand-400 font-semibold bg-brand-500/10 px-2 py-0.5 rounded">Instant Quote</span>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={addedToCart}
                    className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                      addedToCart
                        ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/20'
                        : 'bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 text-slate-950 shadow-brand-500/20 hover:scale-105'
                    }`}
                  >
                    {addedToCart ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Saved to Custom Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        <span>Save Custom Design</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
