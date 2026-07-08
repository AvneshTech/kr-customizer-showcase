import React from 'react';
import { krData } from '../data/krData';

export default function CategoriesGrid() {
  const handleCustomizeClick = () => {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 bg-[#f8f9fa] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 3 top */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1640] tracking-tight">
            {krData.categories.title}
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-[#33305c]">
            {krData.categories.subtitle}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
            {krData.categories.description}
          </p>
        </div>

        {/* 3-Column 6-Card Grid matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {krData.categories.list.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div>
                {/* Category Photo matching Screenshot 3 */}
                <div className="h-56 w-full rounded-2xl overflow-hidden bg-slate-100 mb-6 relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title & Description matching Screenshot 3 */}
                <h4 className="text-xl font-bold text-[#1a1640] mb-3 group-hover:text-[#4f46e5] transition-colors">
                  {cat.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* "Customize It" blue-outlined button matching Screenshot 3 */}
              <div className="pt-2">
                <button
                  onClick={handleCustomizeClick}
                  className="px-6 py-2.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-2xs"
                >
                  Customize It
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
