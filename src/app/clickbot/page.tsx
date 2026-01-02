"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Target, Zap, DollarSign, Shield, Brain, Rocket, CheckCircle, ExternalLink, Star, Activity, BarChart3 } from 'lucide-react';
import DeckNavigation from '@/components/DeckNavigation';

const JupiterClickBotDeck = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const totalSlides = 12;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isTransitioning]);

  interface SlideProps {
    children: React.ReactNode;
    className?: string;
  }

  const Slide: React.FC<SlideProps> = ({ children, className = "" }) => (
    <div className={`w-full h-full overflow-y-auto px-8 md:px-16 py-12 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      
   {/* Navigate through other decks */}
      <DeckNavigation />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Logo - REPLACE WITH YOUR LOGO */}
      <div className="absolute top-6 left-6 z-50 flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-500 rounded-lg flex items-center justify-center">
          {/* REPLACE: Put your ClickBot logo here */}
          <img src="/clickbot-logo.png" alt="ClickBot" className="w-10 h-10" />
        </div>
        <div>
          <div className="text-lg font-bold">ClickBot</div>
          <div className="text-xs text-slate-400">Jupiter Partnership Deck</div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-50 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
        <span className="text-sm font-semibold">{currentSlide + 1} / {totalSlides}</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 relative overflow-hidden">
          <div className={`h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Slide 1: Title */}
            {currentSlide === 0 && (
              <Slide className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-8 animate-bounce">🤖</div>
                  <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ClickBot
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">
                    The Siri of Onchain Trading
                  </h2>
                  <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                    AI-powered Telegram bot that makes Solana trading as easy as sending a text
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all">
                      <div className="text-4xl font-bold text-orange-400 mb-2">525+</div>
                      <div className="text-sm text-slate-300">Daily Users</div>
                      <div className="text-xs text-slate-500 mt-1">$0 CAC</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all">
                      <div className="text-4xl font-bold text-green-400 mb-2">$5k</div>
                      <div className="text-sm text-slate-300">Volume/Week</div>
                      <div className="text-xs text-slate-500 mt-1">Growing</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all">
                      <div className="text-4xl font-bold text-purple-400 mb-2">1%</div>
                      <div className="text-sm text-slate-300">Fee on Sells</div>
                      <div className="text-xs text-slate-500 mt-1">Revenue</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all">
                      <div className="text-4xl font-bold text-blue-400 mb-2">91</div>
                      <div className="text-sm text-slate-300">NPS Score</div>
                      <div className="text-xs text-slate-500 mt-1">Love it!</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-slate-400">
                    <p className="text-xl font-semibold text-slate-300">Emmanuel Ohanwe, Founder & CEO</p>
                    <p className="text-lg">December 2025</p>
                    <p className="text-lg font-semibold text-orange-400">Seeking Jupiter Partnership</p>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 2: The Problem */}
            {currentSlide === 1 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">The Mobile Trading Problem</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-red-900/30 to-red-600/20 rounded-2xl p-8 border border-red-500/30">
                    <div className="text-6xl mb-6">📱</div>
                    <h3 className="text-3xl font-bold mb-6">Existing Solutions Fail Mobile Users</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-red-400 text-xl">•</span>
                        <span>DEX UIs not optimized for mobile</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-red-400 text-xl">•</span>
                        <span>Wallet apps clunky for fast trades</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-red-400 text-xl">•</span>
                        <span>No voice/text interface options</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-red-400 text-xl">•</span>
                        <span>Miss pump opportunities while fumbling with UI</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-900/30 to-orange-600/20 rounded-2xl p-8 border border-orange-500/30">
                    <div className="text-6xl mb-6">⚡</div>
                    <h3 className="text-3xl font-bold mb-6">Telegram is Where Traders Live</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-400 text-xl">•</span>
                        <span>900M+ Telegram users globally</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-400 text-xl">•</span>
                        <span>All crypto communities on Telegram</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-400 text-xl">•</span>
                        <span>Users already check TG 100x/day</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-orange-400 text-xl">•</span>
                        <span>Perfect for command-based trading</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-2xl p-8 border border-purple-500/30">
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl">💡</div>
                    <div>
                      <p className="text-2xl font-bold text-purple-400 mb-3">The Insight</p>
                      <p className="text-xl text-slate-300 leading-relaxed">
                        "What if trading was as simple as texting? `/buy BONK 1 SOL` and you're done. No wallet switching, no DEX UI, just pure speed."
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 3: The Solution - ClickBot */}
            {currentSlide === 2 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                  ClickBot: Trading at the Speed of Thought
                </h2>
                
                    {/* REPLACE: Add screenshot of ClickBot interface here */}
      <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 mb-8">
        <div className="bg-slate-900/50 rounded-lg p-8 text-center">
          <p className="text-slate-400 mb-4">📸 CLICKBOT UI SCREENSHOT</p>
          <p className="text-sm text-slate-500 mb-4">/start menu, /buy interface, success message</p>
          <img 
            src="/clickbot-interface.png" 
            alt="ClickBot Interface" 
            className="w-full max-w-3xl mx-auto rounded-lg object-contain max-h-[600px]" 
          />
        </div>
      </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-900/30 to-green-600/20 rounded-xl p-6 border border-green-500/30">
                    <div className="flex items-center space-x-3 mb-4">
                      <Zap className="h-8 w-8 text-green-400" />
                      <h3 className="text-2xl font-bold">Lightning Fast</h3>
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      <li>✅ Buy in 5 seconds via text command</li>
                      <li>✅ Trailing profit auto-exits at peak</li>
                      <li>✅ DCA strategies run automatically</li>
                      <li>✅ Emergency `/sell all` command</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="h-8 w-8 text-blue-400" />
                      <h3 className="text-2xl font-bold">Non-Custodial</h3>
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      <li>✅ Users control their keys</li>
                      <li>✅ Export seed phrase anytime</li>
                      <li>✅ Compatible with Phantom/Solflare</li>
                      <li>✅ No funds locked on platform</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/20 rounded-xl p-6 border border-purple-500/30">
                    <div className="flex items-center space-x-3 mb-4">
                      <Brain className="h-8 w-8 text-purple-400" />
                      <h3 className="text-2xl font-bold">AI-Powered</h3>
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      <li>✅ Integrated with ClickShift Alpha (73% accuracy)</li>
                      <li>✅ Token analysis before buy</li>
                      <li>✅ Exit cluster detection</li>
                      <li>✅ Rug pull warnings</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-900/30 to-orange-600/20 rounded-xl p-6 border border-orange-500/30">
                    <div className="flex items-center space-x-3 mb-4">
                      <Rocket className="h-8 w-8 text-orange-400" />
                      <h3 className="text-2xl font-bold">Voice Ready</h3>
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      <li>🚀 Q3 2026: Voice commands</li>
                      <li>🚀 "Buy 1 SOL of BONK"</li>
                      <li>🚀 "Set 2x trailing profit"</li>
                      <li>🚀 First voice-enabled trading bot</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-xl p-6 border border-orange-500/30 text-center">
                  <p className="text-2xl font-bold text-orange-400">
                    🎯 If you can use Siri, you can use ClickBot
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 4: Live Demo Walkthrough */}
            {currentSlide === 3 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">User Journey: 5 Seconds to First Trade</h2>
                
                {/* REPLACE: Add buy/sell interface screenshots */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-900/20 to-green-600/10 rounded-xl p-6 border border-green-500/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl font-bold text-green-400">1</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Start Bot</h3>
                        <p className="text-slate-300 mb-4">User sends `/start` → Bot creates wallet instantly</p>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                         <img src="/wallet-created.png" alt="Wallet Creation" className="w-full rounded-lg" />
                          </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/20 to-blue-600/10 rounded-xl p-6 border border-blue-500/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl font-bold text-blue-400">2</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Buy Token</h3>
                        <p className="text-slate-300 mb-4">`/buy DezXAZ... 0.1` → Executes via Jupiter</p>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                           <img src="/buy-executed.png" alt="ClickBot Interface" className="w-full rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/20 to-purple-600/10 rounded-xl p-6 border border-purple-500/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl font-bold text-purple-400">3</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Set Strategy</h3>
                        <p className="text-slate-300 mb-4">Click "📈 Trailing Profit" → Select 2x → Done!</p>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                           <img src="/trailing.png" alt="ClickBot Interface" className="w-full rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-900/20 to-orange-600/10 rounded-xl p-6 border border-orange-500/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl font-bold text-orange-400">4</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Autopilot</h3>
                        <p className="text-slate-300 mb-4">Bot monitors, follows pump, exits at peak → User gets notification</p>
                        <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                          <div className="text-green-400">🎯 Target 2x reached!</div>
                          <div className="text-purple-400">📈 Trailing profit active</div>
                          <div className="text-orange-400">⚡ Peak: 4.2x</div>
                          <div className="text-green-400">✅ Sold at 3.6x (+260%)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30 text-center mt-8">
                  <p className="text-2xl font-bold text-green-400">
                    Total time: 5 seconds. Total effort: 2 clicks. Result: 3.6x profit.
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 5: Why Jupiter Integration Matters */}
{currentSlide === 4 && (
  <Slide>
    <h2 className="text-5xl font-bold mb-12 text-center">Why Jupiter Powers ClickBot</h2>

    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-gradient-to-br from-orange-900/40 to-orange-600/20 rounded-2xl p-8 border border-orange-500/30">
        <div className="text-6xl mb-6 text-center">⚡</div>
        <h3 className="text-3xl font-bold mb-6 text-center text-orange-400">What We Use Jupiter For</h3>
        <ul className="space-y-4 text-slate-300 text-lg">
          <li className="flex items-start space-x-3">
            <span className="text-orange-400">•</span>
            <span><strong>Quote API:</strong> Get best swap rates</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-orange-400">•</span>
            <span><strong>Swap API:</strong> Execute all trades</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-orange-400">•</span>
            <span><strong>Liquidity routing:</strong> Best execution</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-orange-400">•</span>
            <span><strong>Token metadata:</strong> Price, decimals, info</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-green-900/40 to-green-600/20 rounded-2xl p-8 border border-green-500/30">
        <div className="text-6xl mb-6 text-center">🤝</div>
        <h3 className="text-3xl font-bold mb-6 text-center text-green-400">Why Partnership Makes Sense</h3>
        <ul className="space-y-4 text-slate-300 text-lg">
          <li className="flex items-start space-x-3">
            <span className="text-green-400">•</span>
            <span>We drive $5k+/week volume to Jupiter</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-green-400">•</span>
            <span>Growing 22% WoW = more Jupiter volume</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-green-400">•</span>
            <span>Onboard mobile-first users to Solana</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-green-400">•</span>
            <span>Showcase Jupiter&apos;s API capabilities</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Volume Growth Trajectory</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-400 mb-2">$5k</div>
          <div className="text-slate-400">Current Weekly Volume</div>
          <div className="text-sm text-green-400 mt-1">All via Jupiter</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">$62.4k</div>
          <div className="text-slate-400">Projected Q3 2026</div>
          <div className="text-sm text-green-400 mt-1">At 5K users</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-400 mb-2">$4.8M</div>
          <div className="text-slate-400">Projected Q2 2027</div>
          <div className="text-sm text-green-400 mt-1">At 50K users</div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-xl p-6 border border-orange-500/30 text-center">
      <p className="text-2xl font-bold text-orange-400 mb-2">
        ClickBot makes Jupiter accessible to 900M Telegram users
      </p>
      <p className="text-slate-300">
        We&apos;re your mobile growth engine
      </p>
    </div>
  </Slide>
)}

            {/* Slide 6: Traction & Metrics */}
            {currentSlide === 5 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
                  Real Traction, Real Users, Real Revenue
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-orange-900/30 to-orange-600/20 rounded-xl p-8 border border-orange-500/30 text-center">
                    <div className="text-5xl font-bold text-orange-400 mb-2">525+</div>
                    <div className="text-xl text-slate-300 mb-2">Daily Active Users</div>
                    <div className="text-sm text-slate-400">22% WoW growth</div>
                    <div className="text-2xl font-bold text-orange-300 mt-4">$0 CAC</div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/30 to-green-600/20 rounded-xl p-8 border border-green-500/30 text-center">
                    <div className="text-5xl font-bold text-green-400 mb-2">$5k</div>
                    <div className="text-xl text-slate-300 mb-2">Weekly Volume</div>
                    <div className="text-sm text-slate-400">All via Jupiter</div>
                    <div className="text-2xl font-bold text-green-300 mt-4">Growing</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/20 rounded-xl p-8 border border-purple-500/30 text-center">
                    <div className="text-5xl font-bold text-purple-400 mb-2">91</div>
                    <div className="text-xl text-slate-300 mb-2">NPS Score</div>
                    <div className="text-sm text-slate-400">World-class</div>
                    <div className="text-2xl font-bold text-purple-300 mt-4">Love it!</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-2xl font-bold mb-4 text-orange-300">User Testimonials</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="text-slate-300 italic mb-2">
                          "Fastest way to ape into Solana memes. Made 10x on BONK using ClickBot."
                        </p>
                        <p className="text-sm text-slate-500">— @SolanaWhale</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="text-slate-300 italic mb-2">
                          "Set trailing profit, went to sleep, woke up to 4x gains. Magic."
                        </p>
                        <p className="text-sm text-slate-500">— @CryptoTrader_100k</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="text-slate-300 italic mb-2">
                          "Finally, a bot that doesn't custody my funds. Non-custodial + fast = perfect."
                        </p>
                        <p className="text-sm text-slate-500">— DeFi Power User</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-2xl font-bold mb-4 text-purple-300">Built in 2 Months</h3>
                    <ul className="space-y-3 text-slate-300 text-lg">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>525 DAU from zero</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>$0 marketing spend</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>91 NPS (word-of-mouth)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>300+ Telegram community</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>76% Day-7 retention</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30 text-center">
                  <p className="text-xl font-semibold">
                    <span className="text-green-400">Product-market fit achieved.</span> Now scaling with Jupiter.
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 7: The ClickShift Ecosystem */}
            {currentSlide === 6 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">ClickBot is Part of the ClickShift Ecosystem</h2>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600 mb-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">🏢 ClickShift: The Bloomberg Terminal for DeFi</h3>
                    <p className="text-xl text-slate-300">Building prediction intelligence infrastructure for Web3</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                      <div className="text-4xl mb-3 text-center">🎯</div>
                      <h4 className="text-xl font-bold mb-3 text-blue-400 text-center">Alpha</h4>
                      <p className="text-sm text-slate-300 mb-4 text-center">Token prediction intelligence</p>
                      <ul className="space-y-2 text-sm text-slate-400">
                        <li>• 73% prediction accuracy</li>
                        <li>• Exit cluster detection</li>
                        <li>• Rug pull scoring</li>
                        <li>• 2,260 analyses/day</li>
                      </ul>
                    </div>

                    <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/30 ring-2 ring-orange-400">
                      <div className="text-4xl mb-3 text-center">🤖</div>
                      <h4 className="text-xl font-bold mb-3 text-orange-400 text-center">ClickBot</h4>
                      <p className="text-sm text-slate-300 mb-4 text-center font-bold">← SEEKING FUNDING</p>
                      <ul className="space-y-2 text-sm text-slate-400">
                        <li>• Telegram trading bot</li>
                        <li>• 525 daily active users</li>
                        <li>• Non-custodial</li>
                        <li>• Voice commands (Q3 2026)</li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
                      <div className="text-4xl mb-3 text-center">⚡</div>
                      <h4 className="text-xl font-bold mb-3 text-purple-400 text-center">Leverage</h4>
                      <p className="text-sm text-slate-300 mb-4 text-center">Futures trading intelligence</p>
                      <ul className="space-y-2 text-sm text-slate-400">
                        <li>• Liquidation risk calc</li>
                        <li>• Position sizing AI</li>
                        <li>• Multi-exchange signals</li>
                        <li>• Risk management</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-900/30 to-green-600/20 rounded-xl p-6 border border-green-500/30">
                    <h3 className="text-xl font-bold mb-4 text-green-400">Why This Matters for ClickBot</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li>✅ Alpha's AI powers ClickBot's predictions</li>
                      <li>✅ Shared user base (525 DAU across products)</li>
                      <li>✅ Technology synergies (prediction → execution)</li>
                      <li>✅ Cross-sell opportunities</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">ClickBot's Competitive Edge</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li>🧠 Only bot with 73% accuracy AI</li>
                      <li>🛡️ Rug pull detection built-in</li>
                      <li>📈 Exit timing signals</li>
                      <li>🎯 Part of larger prediction ecosystem</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-xl p-6 border border-purple-500/30 text-center mt-6">
                  <p className="text-xl font-bold text-purple-400">
                    ClickBot benefits from the entire ClickShift intelligence infrastructure
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 8: Roadmap */}
            {currentSlide === 7 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">12-Month Roadmap</h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-900/20 to-green-600/10 rounded-xl p-6 border border-green-500/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl font-bold text-green-400">Q3 2026</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-green-400">Voice Commands Launch</h3>
                        <ul className="space-y-2 text-slate-300">
                          <li>🎤 "Buy 1 SOL of BONK" → Executes trade</li>
                          <li>🎤 "Set 2x trailing profit" → Activates strategy</li>
                          <li>🎯 First voice-enabled trading bot globally</li>
                          <li>📈 Target: 5,000 daily active users</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/20 to-blue-600/10 rounded-xl p-6 border border-blue-500/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl font-bold text-blue-400">Q4 2026</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-blue-400">Mobile App + Chain Expansion</h3>
                        <ul className="space-y-2 text-slate-300">
                          <li>📱 Native iOS/Android app (Telegram integration)</li>
                          <li>🌐 Base chain support (Coinbase integration)</li>
                          <li>💼 Portfolio tracking across chains</li>
                          <li>📈 Target: 15,000 daily active users</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/20 to-purple-600/10 rounded-xl p-6 border border-purple-500/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl font-bold text-purple-400">Q2 2027</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-purple-400">Advanced Trading Features</h3>
                        <ul className="space-y-2 text-slate-300">
                          <li>⚡ Limit orders support</li>
                          <li>📊 Copy trading (follow whale wallets)</li>
                          <li>🎯 Auto-sniping new launches</li>
                          <li>📈 Target: 30,000 daily active users</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-900/20 to-orange-600/10 rounded-xl p-6 border border-orange-500/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl font-bold text-orange-400">Q4 2027</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-orange-400">Protocol Layer</h3>
                        <ul className="space-y-2 text-slate-300">
                          <li>🔌 Public API for third-party integrations</li>
                          <li>🤖 Agent SDK for autonomous trading</li>
                          <li>💎 $CLICK governance token</li>
                          <li>📈 Target: 50,000 daily active users</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30 text-center mt-8">
                  <p className="text-2xl font-bold text-green-400">
                    Every milestone = More Jupiter volume
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 9: Business Model */}
            {currentSlide === 8 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">Revenue Model: Sustainable & Scalable</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-green-900/30 to-green-600/20 rounded-xl p-8 border border-green-500/30">
                    <h3 className="text-2xl font-bold mb-6 text-green-400">Current Revenue (2025)</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300">1% Fee on Sells</span>
                          <span className="text-2xl font-bold text-green-400">Primary</span>
                        </div>
                        <div className="text-sm text-slate-400">
                          $5k weekly volume × 1% = $50/week revenue
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300">Current Run Rate</span>
                          <span className="text-2xl font-bold text-green-400">$2600/yr</span>
                        </div>
                        <div className="text-sm text-slate-400">
                          Growing 22% WoW
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/20 rounded-xl p-8 border border-purple-500/30">
                    <h3 className="text-2xl font-bold mb-6 text-purple-400">Future Revenue (2026+)</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300">Premium Tiers</span>
                          <span className="text-2xl font-bold text-purple-400">$29-99/mo</span>
                        </div>
                        <div className="text-sm text-slate-400">
                          Advanced features, priority support
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300">API Access</span>
                          <span className="text-2xl font-bold text-purple-400">$199-999/mo</span>
                        </div>
                        <div className="text-sm text-slate-400">
                          For developers & agents
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Revenue Projections</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-slate-900/50">
                        <tr>
                          <th className="px-6 py-4 text-slate-300">Period</th>
                          <th className="px-6 py-4 text-green-400">Users</th>
                          <th className="px-6 py-4 text-blue-400">Weekly Volume</th>
                          <th className="px-6 py-4 text-purple-400">Annual Revenue</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700">
                        <tr>
                          <td className="px-6 py-4 font-semibold">Q3 2026</td>
                          <td className="px-6 py-4 text-green-400">525</td>
                          <td className="px-6 py-4 text-blue-400">$5k</td>
                          <td className="px-6 py-4 font-bold text-purple-400">$2.6K</td>
                        </tr>
                        <tr className="bg-slate-800/30">
                          <td className="px-6 py-4 font-semibold">Q2 2027</td>
                          <td className="px-6 py-4 text-green-400">5,000</td>
                          <td className="px-6 py-4 text-blue-400">$120k</td>
                          <td className="px-6 py-4 font-bold text-purple-400">$62.4k</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Q4 2027</td>
                          <td className="px-6 py-4 text-green-400">50,000</td>
                          <td className="px-6 py-4 text-blue-400">$4.8M</td>
                          <td className="px-6 py-4 font-bold text-2xl text-purple-400">$2.5M</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30 text-center">
                    <div className="text-sm text-slate-400 mb-1">Gross Margin</div>
                    <div className="text-3xl font-bold text-green-400">95%</div>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30 text-center">
                    <div className="text-sm text-slate-400 mb-1">LTV/CAC</div>
                    <div className="text-3xl font-bold text-blue-400">25:1</div>
                  </div>
                  <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 text-center">
                    <div className="text-sm text-slate-400 mb-1">Payback Period</div>
                    <div className="text-3xl font-bold text-purple-400">2mo</div>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 10: The Ask */}
            {currentSlide === 9 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                  Partnership Opportunity
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-orange-900/30 to-orange-600/20 rounded-xl p-8 border border-orange-500/30">
                    <h3 className="text-3xl font-bold mb-6 text-orange-400">What We're Seeking</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                        <span className="text-slate-300 text-lg">Type:</span>
                        <span className="text-2xl font-bold">Strategic Partnership</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                        <span className="text-slate-300 text-lg">Investment:</span>
                        <span className="text-2xl font-bold">$95K</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                        <span className="text-slate-300 text-lg">Valuation:</span>
                        <span className="text-xl font-bold">$3M post</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-lg">Use:</span>
                        <span className="text-xl font-bold">Voice AI + Growth</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/30 to-green-600/20 rounded-xl p-8 border border-green-500/30">
                    <h3 className="text-3xl font-bold mb-6 text-green-400">What Jupiter Gets</h3>
                    <ul className="space-y-3 text-slate-300 text-lg">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">✅</span>
                        <span><strong>Guaranteed volume growth:</strong> 22% WoW compound</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">✅</span>
                        <span><strong>Mobile user acquisition:</strong> Tap 900M Telegram users</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">✅</span>
                        <span><strong>API showcase:</strong> Demonstrate Jupiter capabilities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">✅</span>
                        <span><strong>Brand association:</strong> Co-marketing opportunities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">✅</span>
                        <span><strong>Voice commands:</strong> First voice-enabled Jupiter integration</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-xl p-8 border border-purple-500/30 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Use of Funds ($95K)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-orange-300">Technical Development (60%)</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Voice AI integration ($35K)</li>
                        <li>• Mobile app development ($15K)</li>
                        <li>• Infrastructure scaling ($8K)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-blue-300">Growth & Operations (40%)</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Community building ($10K)</li>
                        <li>• Content creation ($12K)</li>
                        <li>• Operations ($15K)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30 text-center">
                    <div className="text-sm text-slate-400 mb-1">12-Month Target</div>
                    <div className="text-4xl font-bold text-orange-400">50K</div>
                    <div className="text-xs text-slate-500 mt-1">Daily users</div>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30 text-center">
                    <div className="text-sm text-slate-400 mb-1">Volume Target</div>
                    <div className="text-4xl font-bold text-green-400">$4.8M</div>
                    <div className="text-xs text-slate-500 mt-1">Weekly (via Jupiter)</div>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30 text-center">
                    <div className="text-sm text-slate-400 mb-1">Revenue Target</div>
                    <div className="text-4xl font-bold text-blue-400">$2.5M</div>
                    <div className="text-xs text-slate-500 mt-1">Annual run rate</div>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 11: Why Now */}
            {currentSlide === 10 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">Why Now?</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-orange-900/30 to-red-600/20 rounded-xl p-8 border border-orange-500/30">
                    <div className="text-6xl mb-6 text-center">⚡</div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-400 text-center">Market Timing</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li>✅ Telegram bots exploding (Unibot: $200M FDV)</li>
                      <li>✅ Voice AI finally mature (ChatGPT voice mode)</li>
                      <li>✅ Mobile-first trading trend accelerating</li>
                      <li>✅ Solana memecoin season = volume opportunity</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/30 to-green-600/20 rounded-xl p-8 border border-green-500/30">
                    <div className="text-6xl mb-6 text-center">🚀</div>
                    <h3 className="text-2xl font-bold mb-4 text-green-400 text-center">Our Momentum</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li>✅ 525 DAU → 22% WoW growth</li>
                      <li>✅ 91 NPS = product-market fit</li>
                      <li>✅ $0 CAC = organic viral growth</li>
                      <li>✅ Revenue generating from day 1</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-500/30 mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-red-400 text-center">Competition Window Closing</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-red-400 mb-2">3 months</div>
                      <p className="text-slate-300">Competitors launch voice features</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-400 mb-2">6 months</div>
                      <p className="text-slate-300">Lose first-mover advantage</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-400 mb-2">12 months</div>
                      <p className="text-slate-300">Market saturated with clones</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-xl p-6 border border-purple-500/30 text-center">
                  <p className="text-2xl font-bold text-purple-400 mb-2">
                    The opportunity is NOW. Voice AI + Telegram bots = ClickBot's perfect moment.
                  </p>
                  <p className="text-slate-300">
                    Partner with us before competitors catch up.
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 12: Contact */}
            {currentSlide === 11 && (
              <Slide className="flex items-center justify-center">
                <div className="text-center max-w-3xl">
                  <div className="text-8xl mb-8">🤝</div>
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Let's Grow Together
                  </h2>
                  
                  <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 mb-8">
                    <div className="space-y-4 text-xl">
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-slate-400">📧</span>
                        <a href="mailto:emmanuel@clickshift.io" className="text-orange-400 hover:text-orange-300 transition-colors">
                          emmanuel@clickshift.io
                        </a>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-slate-400">💬</span>
                        <a href="https://t.me/clicksolbot" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                          t.me/clicksolbot
                        </a>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-slate-400">🌐</span>
                        <a href="https://clickshift.io" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                          clickshift.io
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500 to-purple-600 px-12 py-6 rounded-xl font-bold text-2xl mb-8 hover:from-orange-600 hover:to-purple-700 transition-all inline-block">
                    <span className="text-slate-400">💬</span>
                        <a href="https://t.me/clicksolbot" target="_blank" rel="noopener noreferrer"> Try ClickBot Live: t.me/clicksolbot</a>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/30">
                      <div className="text-3xl font-bold text-orange-400">525+</div>
                      <div className="text-sm text-slate-300">Daily Users</div>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                      <div className="text-3xl font-bold text-green-400">$5k</div>
                      <div className="text-sm text-slate-300">Weekly Volume</div>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                      <div className="text-3xl font-bold text-purple-400">91</div>
                      <div className="text-sm text-slate-300">NPS Score</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
                    <p className="text-xl font-bold text-green-400">
                      ClickBot + Jupiter = The future of mobile trading on Solana
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-slate-400 text-lg">
                      Thank you for your consideration.
                    </p>
                    <p className="text-2xl font-bold mt-4 text-orange-400">
                      — Emmanuel Ohanwe, Founder & CEO
                    </p>
                  </div>
                </div>
              </Slide>
            )}

          </div>
        </div>

        {/* Navigation */}
        <div className="relative z-20 flex items-center justify-between px-8 py-6 bg-slate-900/80 backdrop-blur-lg border-t border-slate-800">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === 0
                ? 'bg-slate-800/30 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800/80 hover:bg-slate-700 text-white'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="hidden md:inline">Previous</span>
          </button>

          <div className="flex items-center space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`transition-all rounded-full ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-gradient-to-r from-orange-500 to-purple-600' 
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === totalSlides - 1
                ? 'bg-slate-800/30 text-slate-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white'
            }`}
          >
            <span className="hidden md:inline">Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JupiterClickBotDeck;