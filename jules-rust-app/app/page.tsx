import BackgroundCanvas from "@/components/BackgroundCanvas";
import CosmicBackground from "@/components/CosmicBackground";
import Link from "next/link";
import { COURSE_TRACKS } from "@/lib/course-data";
import ScrollingAd from "@/components/ScrollingAd";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center pt-32 p-8 overflow-hidden">
      <CosmicBackground />
      <BackgroundCanvas />

      {/* Hero Content */}
      <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-4xl">
        {/* Animated Greeting */}
        <div className="space-y-6 cursor-default relative">
          <div className="absolute -inset-10 bg-accent-purple/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
          <h1 className="relative text-5xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-br from-accent-orange via-white to-accent-cyan text-shadow-glow fluid-hover transition-all duration-300 tracking-tighter">
            &lt;HELLO WORLD /&gt;
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            🚀 Learn <span className="text-accent-orange font-bold">Rust</span> the fun way 🦀
          </p>
        </div>

        {/* Call to Action Actions */}
        <div className="flex gap-6 flex-wrap justify-center">
          <Link
            href="/learn"
            className="flex items-center justify-center px-8 py-4 bg-accent-orange text-background font-bold text-lg border border-accent-orange hover:bg-transparent hover:text-accent-orange hover:shadow-[0_0_20px_rgba(255,159,28,0.6)] transition-all uppercase tracking-wider pixelated"
          >
            🔥 Select Track
          </Link>
          <Link
            href="/ide"
            className="flex items-center justify-center px-8 py-4 bg-transparent text-accent-cyan font-bold text-lg border border-accent-cyan hover:bg-accent-cyan hover:text-background hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] transition-all uppercase tracking-wider pixelated"
          >
            💻 Use IDE
          </Link>
          <Link
            href="/ai-math"
            className="flex items-center justify-center px-8 py-4 bg-transparent text-accent-purple font-bold text-lg border border-accent-purple hover:bg-accent-purple hover:text-background hover:shadow-[0_0_20px_rgba(126,80,163,0.6)] transition-all uppercase tracking-wider pixelated"
          >
            📐 AI Mathematics
          </Link>
        </div>

      </div>

      {/* Features Section */}
      <div className="mt-32 w-full max-w-6xl z-10 relative pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-orange fluid-hover">
          ⚡ NEXT_GEN_HACKING_TOOLS ⚡
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="glass-panel p-8 border border-accent-purple/30 hover:border-accent-cyan/60 transition-all group">
            <div className="text-xs font-bold text-accent-orange mb-2 tracking-widest">🤖 AI_ASSISTANT</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Breach Systems Faster</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              supercharge your learning with our Cyber-Assistant. It delivers instant, personalized guidance directly into your console.
              Stuck on a segment fault? Need to optimize your payload size? Our AI analyzes your code in real-time to provide surgical hints and exploit optimizations.
              Start hacking smarter, not harder.
            </p>

          </div>

          {/* Feature 2 */}
          <div className="glass-panel p-8 border border-accent-purple/30 hover:border-accent-cyan/60 transition-all group">
            <div className="text-xs font-bold text-accent-yellow mb-2 tracking-widest">🔐 HINTS_DB</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Decrypt The Unknown</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Hit a firewall you can&apos;t bypass? Access our encrypted Hints Database.
              It provides context-aware clues that gently nudge you toward the solution without completely spoiling the challenge.
              Master the art of problem-solving by learning *how* to break through barriers.
            </p>

          </div>

          {/* Feature 3 */}
          <div className="glass-panel p-8 border border-accent-purple/30 hover:border-accent-cyan/60 transition-all group">
            <div className="text-xs font-bold text-accent-green mb-2 tracking-widest">⌨️ AUTOCOMPLETE</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Inject Payloads Rapidly</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Time is money in the cyber-underworld. Write Rust exploits at blinding speeds with our neural-linked autocomplete engine.
              It predicts your next move, suggesting valid syntax and library functions instantly.
              Toggle it off for &quot;Hardcore Mode&quot; when you need to prove your raw coding skills.
            </p>

          </div>

          {/* Feature 4 */}
          <div className="glass-panel p-8 border border-accent-purple/30 hover:border-accent-cyan/60 transition-all group">
            <div className="text-xs font-bold text-accent-cyan mb-2 tracking-widest">☁️ CLOUD_GRIFT</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Hack From Anywhere</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              The grid never sleeps, and neither should you. Our cloud-based mobile IDE allows you to continue your operations from any device, anywhere in the world.
              Compile high-performance Rust binaries directly in your browser—no local toolchain required.
            </p>

          </div>
        </div>

        {/* Available Tracks Section */}
        <div className="mt-32 w-full max-w-6xl z-10 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan fluid-hover">
            📡 INTERCEPTED_DATA_STREAMS 📡
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSE_TRACKS.map((track) => (
              <div key={track.id} className="relative group p-[1px] bg-gradient-to-b from-accent-cyan/50 to-transparent hover:to-accent-orange/50 rounded-lg transition-all duration-300">
                <div className="absolute inset-0 bg-accent-cyan/10 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300" />
                <div className="h-full bg-black/80 backdrop-blur-md p-6 rounded-lg flex flex-col items-center text-center relative z-10 border border-white/5 group-hover:border-accent-orange/30">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {track.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono uppercase tracking-wider group-hover:text-accent-orange transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {track.description}
                  </p>
                  <Link
                    href="/learn"
                    className="w-full py-2 bg-white/5 border border-white/10 hover:bg-accent-cyan hover:text-black hover:border-accent-cyan transition-all uppercase text-xs font-bold tracking-widest rounded-sm"
                  >
                    DECRYPT &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Briefing Section */}
        <div className="mt-32 p-12 border border-accent-green/30 bg-black/50 backdrop-blur rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent animate-pulse"></div>
          <h3 className="text-3xl font-bold text-accent-green mb-8 text-center uppercase tracking-widest">📜 Mission Briefing: Why Rust?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold text-white mb-2">Memory Safe</h4>
              <p className="text-gray-400 text-sm">Eliminate entire classes of bugs. No more segfaults or buffer overflows in your secure systems.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-2">Blazingly Fast</h4>
              <p className="text-gray-400 text-sm">Compile to bare metal. Rust rivals C++ in performance, making it perfect for game engines and systems.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚙️</div>
              <h4 className="text-xl font-bold text-white mb-2">Modern Tooling</h4>
              <p className="text-gray-400 text-sm">Cargo, rustfmt, and clippy. A world-class developer experience out of the box.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 w-full mb-8">
          <ScrollingAd />
        </div>


      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 text-sm text-accent-purple/50 z-0">
        * No copyrights were harmed in the making of this project *
      </div>
    </main>
  );
}
