/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, MoonStar, Lock, SearchX } from 'lucide-react';
import { portalData } from './data';
import { AppItem } from './types';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const currentYear = new Date().getFullYear();

  const filteredApps = useMemo(() => {
    const keyword = searchTerm.toLowerCase();
    return portalData.filter((app) => 
      app.nama.toLowerCase().includes(keyword) || 
      app.deskripsi.toLowerCase().includes(keyword)
    );
  }, [searchTerm]);

  return (
    <div className="text-slate-800 min-h-screen flex flex-col font-sans antialiased">
      {/* Header / Top Bar (Mobile Optimized) */}
      <header className="bg-gradient-to-br from-[#166534] to-[#16a34a] rounded-b-[2.5rem] shadow-[0_10px_30px_-10px_rgba(22,163,74,0.5)] text-white pt-10 pb-20 px-5 relative overflow-hidden shrink-0 z-10">
        {/* Decor */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-10 -left-10 w-32 h-32 bg-emerald-300 opacity-20 rounded-full blur-xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Greeting */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-2 shadow-inner overflow-hidden">
                <img 
                  src="/favicon.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    // Fallback visual if favicon.png is not found yet
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-emerald-50');
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-primary-600 font-bold text-xl">A</span>';
                  }}
                />
              </div>
              <div>
                <p className="text-emerald-100 text-sm font-medium mb-0.5">Assalamu'alaikum,</p>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Portal Al-Fatah</h1>
              </div>
            </div>
            <div className="hidden sm:flex w-12 h-12 bg-white/20 backdrop-blur-md rounded-full items-center justify-center border border-white/30">
              <MoonStar className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Search Bar */}
          <div className={`relative w-full shadow-lg rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-colors duration-300 ${searchFocused ? 'bg-white border-white' : ''}`}>
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-xl transition-colors ${searchFocused ? 'text-primary-600' : 'text-white/70'}`} />
            <input
              type="text"
              placeholder="Cari layanan (mis: Ujian, Keuangan)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full py-4 pl-12 pr-4 bg-transparent outline-none text-white placeholder-white/70 font-medium rounded-2xl focus:text-slate-800 focus:placeholder-slate-400"
            />
          </div>
        </div>
      </header>

      {/* Main Content (App Grid) */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-10">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-lg font-bold text-slate-800">Layanan Tersedia</h2>
            <span className="text-xs font-semibold bg-emerald-100 text-primary-700 px-3 py-1 rounded-full">
              {filteredApps.length} App
            </span>
          </div>

          {/* App Grid */}
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 bg-white rounded-3xl shadow-sm border border-slate-100 mt-4">
              <SearchX className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700">Tidak ditemukan</h3>
              <p className="text-sm text-slate-500 mt-1">Coba kata kunci yang lain</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center shrink-0">
        <p className="text-xs text-slate-400 font-medium">
          &copy; {currentYear} Yayasan Pendidikan.
        </p>
      </footer>
    </div>
  );
}

function AppCard({ app }: { app: AppItem }) {
  const isLocked = app.status && app.status.trim() !== "";
  
  return (
    <div className={`relative transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${!isLocked ? 'hover:-translate-y-1 hover:shadow-xl active:scale-95' : ''}`}>
      {/* Status Badge */}
      {isLocked && (
        <div className="absolute top-2 right-2 z-30">
          <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200 shadow-sm uppercase tracking-wider">
            {app.status}
          </span>
        </div>
      )}

      {/* Card Content */}
      <a
        href={isLocked ? '#' : app.link}
        target={isLocked ? '_self' : '_blank'}
        rel={isLocked ? '' : 'noopener noreferrer'}
        className={`flex flex-col items-center bg-white rounded-3xl p-5 border border-slate-100 shadow-sm text-center group h-full ${
          isLocked ? 'pointer-events-none opacity-70 grayscale-[0.5]' : ''
        }`}
      >
        {/* Icon Circle */}
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-3 ${app.bgIcon || 'bg-slate-100'} ${app.warnaIcon || 'text-slate-600'}`}>
           <app.IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300 ${app.status ? 'opacity-50' : ''}`} />
        </div>

        {/* Texts */}
        <h3 className={`text-[15px] sm:text-base font-bold text-slate-800 leading-tight mb-1 ${!isLocked ? 'group-hover:text-primary-600' : ''} transition-colors`}>
          {app.nama}
        </h3>
        <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-snug px-1">
          {app.deskripsi}
        </p>
      </a>

      {/* Locked Overlay Effect */}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/40 backdrop-blur-[1px] w-full h-full rounded-3xl"></div>
          <div className="absolute bg-slate-800/80 text-white p-1.5 rounded-full shadow-lg">
            <Lock className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  );
}
