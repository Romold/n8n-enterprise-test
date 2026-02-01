
  import React from 'react';
const Body: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6 max-w-7xl mx-auto flex flex-col md:items-center md:text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Built to make you extraordinarily productive,<br className="hidden md:block" />
          Cursor is the best way to code with AI.
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl">
          Write code faster, fix bugs instantly, and build software like never before with an editor designed for the AI era.
        </p>
        <button className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-200 transition-all active:scale-95">
          <span>Download for Windows</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* Editor Preview Section */}
      <section className="px-4 pb-32">
        <div className="max-w-6xl mx-auto relative group">
           {/* Glow effect behind */}
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
           
           {/* Editor Window */}
           <div className="relative rounded-xl border border-white/10 bg-[#0c0c0c] shadow-2xl overflow-hidden ring-1 ring-white/5">
              {/* Window Controls */}
              <div className="h-10 border-b border-white/5 bg-[#181818] flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="flex-1 text-center text-xs font-mono text-gray-500">cursor-ai-demo</div>
              </div>
              
              <div className="flex h-[400px] md:h-[600px] font-mono text-sm">
                {/* Sidebar */}
                <div className="w-64 border-r border-white/5 hidden md:flex flex-col bg-[#111] p-4">
                   <div className="text-xs font-bold text-gray-500 mb-4 tracking-wider">EXPLORER</div>
                   <div className="flex flex-col gap-2 text-gray-400">
                      <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded text-white cursor-pointer">
                        <span className="text-blue-400">TS</span>
                        <span>App.tsx</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer transition-colors">
                        <span className="text-yellow-400">TS</span>
                        <span>utils.ts</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer transition-colors">
                        <span className="text-purple-400">CSS</span>
                        <span>globals.css</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer transition-colors">
                        <span className="text-gray-400">JSON</span>
                        <span>package.json</span>
                      </div>
                   </div>
                </div>

                {/* Main Code Area */}
                <div className="flex-1 bg-[#0c0c0c] flex flex-col relative">
                   {/* Tabs */}
                   <div className="flex border-b border-white/5 bg-[#0c0c0c]">
                      <div className="px-4 py-2 text-white border-t-2 border-blue-500 bg-[#1e1e1e] text-xs">App.tsx</div>
                      <div className="px-4 py-2 text-gray-500 hover:bg-[#1e1e1e]/50 text-xs cursor-pointer">utils.ts</div>
                   </div>
                   
                   {/* Code Content */}
                   <div className="p-6 text-gray-300 leading-6 overflow-hidden">
                      <div className="flex gap-4">
                         <div className="text-gray-600 text-right select-none">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12</div>
                         <div className="flex-1">
                            <p><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</p>
                            <p className="mb-4"><span className="text-purple-400">import</span> {'{'} generateCode {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'./ai'</span>;</p>
                            <p><span className="text-blue-400">const</span> <span className="text-yellow-400">App</span> = () =&gt; {'{'}</p>
                            <p className="pl-4"><span className="text-blue-400">const</span> [state, setState] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">null</span>);</p>
                            <p className="pl-4 mb-2"><span className="text-gray-500">// Just press Cmd+K to edit</span></p>
                            <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                            <p className="pl-8">&lt;<span className="text-blue-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-400">"min-h-screen bg-black"</span>&gt;</p>
                            <p className="pl-12">&lt;<span className="text-yellow-400">Header</span> /&gt;</p>
                            <p className="pl-12">&lt;<span className="text-yellow-400">Editor</span> /&gt;</p>
                            <p className="pl-8">&lt;/<span className="text-blue-400">div</span>&gt;</p>
                            <p className="pl-4">);</p>
                            <p>{'}'};</p>
                         </div>
                      </div>

                      {/* Floating AI Prompt - The "Cursor" magic */}
                      <div className="absolute top-1/4 left-1/4 right-1/4 bg-[#181818] border border-white/10 rounded-lg shadow-2xl p-0 overflow-hidden animate-pulse-slow">
                         <div className="p-3 border-b border-white/10 flex items-center justify-between">
                            <span className="text-xs text-gray-400 font-medium">Edit Selection</span>
                            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-400">Cmd+K</span>
                         </div>
                         <div className="p-3">
                            <p className="text-sm text-white">Refactor this component to use Tailwind CSS grid layout instead of flexbox.</p>
                         </div>
                         <div className="bg-[#0f0f0f] p-2 flex justify-end gap-2">
                            <button className="text-xs px-3 py-1.5 rounded bg-blue-600 text-white font-medium hover:bg-blue-500">Generate</button>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Privacy Mode",
                desc: "Your code never leaves your machine. Toggle privacy mode to keep proprietary code completely local.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                )
              },
              {
                title: "Codebase Indexing",
                desc: "Cursor understands your entire repo. Ask questions about files you haven't opened in months.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                )
              },
              {
                title: "Natural Language Edit",
                desc: "Highlight code and ask Cursor to change it. No more copying and pasting from browser chat.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors group cursor-default">
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Ready to code faster?</h2>
        <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors">
          Download Cursor Free
        </button>
      </section>
    </div>
  );
};

export default Body;