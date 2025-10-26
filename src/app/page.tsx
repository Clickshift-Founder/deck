"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Target, Zap, DollarSign, Globe, Award, Rocket, Shield, Brain, Network, ArrowRight, Download, CheckCircle, AlertCircle, Activity, BarChart3, Layers, GitBranch, Star, ExternalLink } from 'lucide-react';
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

const ClickShiftPitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const totalSlides = 14;

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

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
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
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-50 flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-xl">
          <img src="/logo.png" alt="ClickShift" className="w-10 h-10" />
        </div>
        <div>
          <div className="text-lg font-bold">ClickShift</div>
          <div className="text-xs text-slate-400">Investor Deck</div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-50 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
        <span className="text-sm font-semibold">{currentSlide + 1} / {totalSlides}</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        
        {/* Slides Container */}
        <div className="flex-1 relative overflow-hidden">
          <div 
            className={`h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            
            {/* Slide 1: Title */}
            {currentSlide === 0 && (
              <Slide className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-8 animate-bounce">⚡</div>
                  <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ClickShift
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">
                    The Bloomberg Terminal for DeFi
                  </h2>
                  <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                    Building the Prediction Intelligence Protocol to onboard the next 10 million users to Web3
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105">
                      <div className="text-4xl font-bold text-blue-400 mb-2">525+</div>
                      <div className="text-sm text-slate-300">Daily Users</div>
                      <div className="text-xs text-slate-500 mt-1">$0 CAC</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all transform hover:scale-105">
                      <div className="text-4xl font-bold text-green-400 mb-2">91</div>
                      <div className="text-sm text-slate-300">NPS Score</div>
                      <div className="text-xs text-slate-500 mt-1">World-class</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all transform hover:scale-105">
                      <div className="text-4xl font-bold text-purple-400 mb-2">73%</div>
                      <div className="text-sm text-slate-300">Accuracy</div>
                      <div className="text-xs text-slate-500 mt-1">Predictions</div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all transform hover:scale-105">
                      <div className="text-4xl font-bold text-orange-400 mb-2">$2.7M</div>
                      <div className="text-sm text-slate-300">User Savings</div>
                      <div className="text-xs text-slate-500 mt-1">Protected</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-slate-400">
                    <p className="text-xl font-semibold text-slate-300">Emmanuel Ohanwe, Founder & CEO</p>
                    <p className="text-lg">October 2025</p>
                    <p className="text-lg font-semibold text-purple-400">Raising $1.5M Seed Round</p>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 2: Problem */}
            {currentSlide === 1 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">The $50 Billion Problem</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-red-900/30 to-red-600/20 rounded-2xl p-8 border border-red-500/30">
                    <div className="text-6xl mb-6">💸</div>
                    <h3 className="text-3xl font-bold mb-6">95% of Traders Lose Money</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-red-400 text-xl">•</span>
                        <span className="text-lg">560M+ crypto traders worldwide</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-red-400 text-xl">•</span>
                        <span className="text-lg">$50B lost annually to poor timing</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-red-400 text-xl">•</span>
                        <span className="text-lg">Trading on emotions and guesswork</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-red-400 text-xl">•</span>
                        <span className="text-lg">Tools show PAST data, not FUTURE</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                    <div className="text-6xl mb-6">🚪</div>
                    <h3 className="text-3xl font-bold mb-6">Web3 is Too Complex</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-400 text-xl">•</span>
                        <span className="text-lg">80% of world still not onchain</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-400 text-xl">•</span>
                        <span className="text-lg">Rug pulls, scams, wallet burns</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-400 text-xl">•</span>
                        <span className="text-lg">No safety guardrails for newcomers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-400 text-xl">•</span>
                        <span className="text-lg">Ambiguous, intimidating UX</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/20 to-purple-900/20 rounded-2xl p-8 border border-red-500/30">
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl">💔</div>
                    <div>
                      <p className="text-2xl font-bold text-red-400 mb-3">The Founder's Pain</p>
                      <p className="text-2xl italic text-slate-300 mb-4 leading-relaxed">
                        "I lost 9 months of my salary trading crypto. If I wasn't determined, I would have never returned to Web3."
                      </p>
                      <p className="text-xl text-slate-400 leading-relaxed">
                        ClickShift exists to ensure my experience is not repeated. We're building the safety net Web3 desperately needs.
                      </p>
                      <p className="text-sm text-slate-500 mt-4">— Emmanuel Ohanwe, Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 3: Solution */}
            {currentSlide === 2 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ClickShift: The Prediction Intelligence Protocol
                </h2>
                <p className="text-2xl text-center text-slate-300 mb-12">
                  We don't just analyze tokens. We predict their future.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/20 rounded-xl p-6 border border-purple-500/30 hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-3 mb-4">
                      <Brain className="h-8 w-8 text-purple-400" />
                      <h3 className="text-2xl font-bold">Alpha: Token Intelligence</h3>
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>Exit cluster detection (patent-pending)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>73% prediction accuracy</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>Real-time legitimacy scoring</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>AI learning from 2,260 daily analyses</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-900/30 to-orange-600/20 rounded-xl p-6 border border-orange-500/30 hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-3 mb-4">
                      <Zap className="h-8 w-8 text-orange-400" />
                      <h3 className="text-2xl font-bold">Leverage: Futures Intel</h3>
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Liquidation risk calculator</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>MACD + OBV fusion signals</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Position sizing recommendations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Cross-exchange arbitrage alerts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/30 to-green-600/20 rounded-xl p-6 border border-green-500/30 hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-3 mb-4">
                      <Globe className="h-8 w-8 text-green-400" />
                      <h3 className="text-2xl font-bold">POC: Web3 Onboarding</h3>
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">•</span>
                        <span>solanafirstpoc.clickshift.io live</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Safe simulation environment</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Gamified learning experience</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Zero risk, maximum learning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/20 rounded-xl p-6 border border-blue-500/30 hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-3 mb-4">
                      <Network className="h-8 w-8 text-blue-400" />
                      <h3 className="text-2xl font-bold">Protocol Layer (2027)</h3>
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>API for any app integration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>Streaming prediction nodes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>Governance token ($SHIFT)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>"Chainlink for predictions"</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30 text-center">
                  <p className="text-xl font-semibold text-purple-300">
                    🎯 Mission: When 80% of the world is onchain, solutions like Polymarket, borderless payments, and DeFi reach their full potential.
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 4: Product Demo */}
            {currentSlide === 3 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">Live Products. Real Users. Proven Impact.</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-5xl">🎯</div>
                      <div>
                        <h3 className="text-3xl font-bold">ClickShift Alpha</h3>
                        <p className="text-blue-400 text-lg">Token Intelligence</p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-slate-300 mb-6 italic">
                      "Is this token a gem or a scam?"
                    </p>
                    
                    <div className="bg-slate-900/50 rounded-lg p-4 mb-6 font-mono text-sm space-y-1">
                      <div className="text-green-400">✓ Analysis Complete (2.3s)</div>
                      <div className="text-purple-400">🎯 Exit Cluster at $0.45 (75% confidence)</div>
                      <div className="text-blue-400">📊 RSI: 28 (Oversold)</div>
                      <div className="text-orange-400">⚡ 75% pump probability next 2-6 hrs</div>
                      <div className="text-green-400">🛡️ Legitimacy Score: 8.5/10</div>
                    </div>

                    <ul className="space-y-2 text-slate-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>2,260 tokens analyzed daily</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>73% prediction accuracy</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Patent-pending algorithm</span>
                      </li>
                    </ul>

                    <a 
                      href="https://alpha.clickshift.io" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Try Alpha Live</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-orange-900/30 to-red-600/20 rounded-2xl p-8 border border-orange-500/30 hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-5xl">⚡</div>
                      <div>
                        <h3 className="text-3xl font-bold">ClickShift Leverage</h3>
                        <p className="text-orange-400 text-lg">Futures Intelligence</p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-slate-300 mb-6 italic">
                      "Never lose your portfolio to futures again"
                    </p>
                    
                    <div className="bg-slate-900/50 rounded-lg p-4 mb-6 font-mono text-sm space-y-1">
                      <div className="text-green-400">BTC/USDT Analysis Complete</div>
                      <div className="text-blue-400">📈 LONG Signal | MODERATE Risk</div>
                      <div className="text-yellow-400">💰 Position: 3% of portfolio</div>
                      <div className="text-purple-400">🎯 Entry: $95,500 | Stop: $91,800</div>
                      <div className="text-green-400">✨ R/R: 1:2.8 | Win Rate: 74%</div>
                    </div>

                    <ul className="space-y-2 text-slate-300 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Liquidation risk calculator</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Position sizing AI</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Multi-exchange signals</span>
                      </li>
                    </ul>

                    <a 
                      href="https://leverage.clickshift.io" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Try Leverage Live</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30 text-center">
                  <p className="text-xl font-bold text-green-400">
                    📱 Both products are live at clickshift.io with 525+ daily active users
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 5: Traction */}
            {currentSlide === 4 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Explosive Organic Growth
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-900/30 to-emerald-600/20 rounded-xl p-8 border border-green-500/30 text-center">
                    <div className="text-5xl font-bold text-green-400 mb-2">525+</div>
                    <div className="text-xl text-slate-300 mb-2">Daily Active Users</div>
                    <div className="text-sm text-slate-400">22% WoW growth</div>
                    <div className="text-2xl font-bold text-green-300 mt-4">$0 CAC</div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/20 rounded-xl p-8 border border-blue-500/30 text-center">
                    <div className="text-5xl font-bold text-blue-400 mb-2">91</div>
                    <div className="text-xl text-slate-300 mb-2">NPS Score</div>
                    <div className="text-sm text-slate-400">World-class</div>
                    <div className="text-2xl font-bold text-blue-300 mt-4">1.4x Viral</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-600/20 rounded-xl p-8 border border-purple-500/30 text-center">
                    <div className="text-5xl font-bold text-purple-400 mb-2">$2.7M</div>
                    <div className="text-xl text-slate-300 mb-2">User Savings</div>
                    <div className="text-sm text-slate-400">Protected from losses</div>
                    <div className="text-2xl font-bold text-purple-300 mt-4">73% Accuracy</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-2xl font-bold mb-4 text-orange-300">User Testimonials</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="text-slate-300 italic mb-2">
                          "Their whale exit detection spotted the dump 4 minutes before. Sold at +67% while others got destroyed."
                        </p>
                        <p className="text-sm text-slate-500">— Alex K., DeFi Trader</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <p className="text-slate-300 italic mb-2">
                          "Found POPCAT at $80K market cap using Alpha. Made 47x returns."
                        </p>
                        <p className="text-sm text-slate-500">— @CryptoWhale_100k</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-2xl font-bold mb-4 text-purple-300">Built in 4 Months</h3>
                    <ul className="space-y-2 text-slate-300 text-lg">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>2 products shipped from zero</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>91 NPS with $0 marketing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>300+ active Telegram community</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>76% Day-7 retention rate</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30 text-center">
                  <p className="text-xl font-semibold">
                    <span className="text-blue-400">Growing 22% week-over-week purely through word-of-mouth</span>
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 6: Market Opportunity */}
            {currentSlide === 5 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">$50B Market Opportunity</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/20 rounded-xl p-8 border border-blue-500/30">
                    <h3 className="text-3xl font-bold mb-6">Addressable Market</h3>
                    <div className="space-y-5">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                        <span className="text-slate-300 text-lg">Global Crypto Traders:</span>
                        <span className="text-3xl font-bold text-blue-400">560M+</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                        <span className="text-slate-300 text-lg">Trading Volume/Day:</span>
                        <span className="text-3xl font-bold text-purple-400">$2.3T</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                        <span className="text-slate-300 text-lg">Lost to Poor Timing:</span>
                        <span className="text-3xl font-bold text-red-400">$50B/yr</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-lg">Prediction Markets:</span>
                        <span className="text-3xl font-bold text-green-400">$3B+</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/30 to-emerald-600/20 rounded-xl p-8 border border-green-500/30">
                    <h3 className="text-3xl font-bold mb-6">Our Opportunity</h3>
                    <div className="space-y-5">
                      <div>
                        <div className="text-sm text-slate-400 mb-2">TAM (Total Addressable):</div>
                        <div className="text-4xl font-bold text-green-400 mb-1">$28B</div>
                        <div className="text-xs text-slate-500">All trading intelligence tools</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-2">SAM (Serviceable):</div>
                        <div className="text-4xl font-bold text-blue-400 mb-1">$8B</div>
                        <div className="text-xs text-slate-500">Crypto-specific predictive tools</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-2">SOM (5-year target):</div>
                        <div className="text-4xl font-bold text-purple-400 mb-1">$400M</div>
                        <div className="text-xs text-slate-500">5% market share achievable</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-5xl mb-4">📊</div>
                    <h4 className="font-bold text-xl mb-3">Prediction Markets</h4>
                    <p className="text-slate-300 mb-2">Polymarket: $3B+ volume</p>
                    <p className="text-sm text-slate-400">Growing 300% YoY</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-5xl mb-4">🌐</div>
                    <h4 className="font-bold text-xl mb-3">Web3 Onboarding</h4>
                    <p className="text-slate-300 mb-2">80% of world not onchain</p>
                    <p className="text-sm text-slate-400">10M users = $500M opportunity</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-5xl mb-4">🔮</div>
                    <h4 className="font-bold text-xl mb-3">Protocol Layer</h4>
                    <p className="text-slate-300 mb-2">Chainlink: $10B+ valuation</p>
                    <p className="text-sm text-slate-400">We're building the oracle for predictions</p>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 7: Business Model */}
            {currentSlide === 6 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">Multiple Revenue Streams to $50M ARR</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
                      <h3 className="text-2xl font-bold mb-4 text-blue-400">Phase 1: Platform (2026)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2 text-lg">
                            <span className="text-slate-300 font-semibold">Freemium SaaS</span>
                            <span className="font-bold text-green-400">Q1 2026</span>
                          </div>
                          <div className="text-sm text-slate-400 pl-4">
                            • Free: 10 analyses/day<br/>
                            • Pro: $29/mo unlimited<br/>
                            • Premium: $99/mo + API
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-slate-700">
                          <div className="flex justify-between mb-2">
                            <span className="text-slate-300 text-lg font-semibold">2026 Target:</span>
                            <span className="text-3xl font-bold text-green-400">$2M ARR</span>
                          </div>
                          <div className="text-sm text-slate-400 pl-4">
                            5,000 paid users @ $40 ARPU
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/20 rounded-xl p-6 border border-purple-500/30">
                      <h3 className="text-2xl font-bold mb-4 text-purple-400">Phase 2: Protocol (2027-28)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2 text-lg">
                            <span className="text-slate-300 font-semibold">API Licenses</span>
                            <span className="font-bold">$5K-50K/mo</span>
                          </div>
                          <div className="text-sm text-slate-400 pl-4">
                            DEXs, wallets, bots integrate our predictions
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2 text-lg">
                            <span className="text-slate-300 font-semibold">Protocol Fees</span>
                            <span className="font-bold">0.1% volume</span>
                          </div>
                          <div className="text-sm text-slate-400 pl-4">
                            On $1B prediction market volume = $1M/year
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-700">
                          <div className="flex justify-between mb-2">
                            <span className="text-slate-300 text-lg font-semibold">2028 Target:</span>
                            <span className="text-3xl font-bold text-purple-400">$50M ARR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <h4 className="font-bold mb-3 text-lg text-orange-400">Token Economics</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-400">•</span>
                          <span>$SHIFT governance token (2027)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-400">•</span>
                          <span>Staking for prediction validation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-400">•</span>
                          <span>Protocol fee revenue sharing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-400">•</span>
                          <span>DAO governance voting rights</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
                      <h4 className="font-bold mb-3 text-lg">Unit Economics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-300">LTV/CAC Ratio:</span>
                          <span className="font-bold text-green-400">25:1</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Gross Margin:</span>
                          <span className="font-bold text-green-400">89%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Payback Period:</span>
                          <span className="font-bold text-green-400">2 months</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Monthly Churn:</span>
                          <span className="font-bold text-green-400">3%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30 text-center">
                  <p className="text-xl font-semibold">
                    Path to <span className="text-green-400">$50M ARR by 2028</span>: Platform fees + Protocol revenue + Token value
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 8: Protocol Vision */}
            {currentSlide === 7 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Protocol Vision: The "Chainlink for Predictions"
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/20 rounded-xl p-8 border border-blue-500/30">
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Platform Today (2025)</h3>
                    <div className="space-y-4 text-slate-300">
                      <div className="flex items-start space-x-3">
                        <span className="text-blue-400 text-lg">1.</span>
                        <div>
                          <p className="font-semibold">525 users come to OUR site</p>
                          <p className="text-sm text-slate-400">Direct B2C relationship</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-blue-400 text-lg">2.</span>
                        <div>
                          <p className="font-semibold">They pay US subscriptions</p>
                          <p className="text-sm text-slate-400">$29-99/month per user</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-blue-400 text-lg">3.</span>
                        <div>
                          <p className="font-semibold">Valuation: $50-100M potential</p>
                          <p className="text-sm text-slate-400">Good SaaS business</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
                    <h3 className="text-2xl font-bold mb-6 text-purple-400">Protocol Future (2027+)</h3>
                    <div className="space-y-4 text-slate-300">
                      <div className="flex items-start space-x-3">
                        <span className="text-purple-400 text-lg">1.</span>
                        <div>
                          <p className="font-semibold">100+ apps integrate OUR predictions</p>
                          <p className="text-sm text-slate-400">Become the infrastructure</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-purple-400 text-lg">2.</span>
                        <div>
                          <p className="font-semibold">Protocol fees from ENTIRE ecosystem</p>
                          <p className="text-sm text-slate-400">0.1% of billions in volume</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-purple-400 text-lg">3.</span>
                        <div>
                          <p className="font-semibold">Valuation: $1-10 BILLION potential</p>
                          <p className="text-sm text-slate-400">Infrastructure play</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-green-400">How We Become the Protocol</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🏗️</div>
                      <h4 className="font-bold mb-2">1. Build Trust</h4>
                      <p className="text-sm text-slate-400">Prove accuracy with 100K+ users</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔌</div>
                      <h4 className="font-bold mb-2">2. Open APIs</h4>
                      <p className="text-sm text-slate-400">Let any app plug into our predictions</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🌐</div>
                      <h4 className="font-bold mb-2">3. Decentralize</h4>
                      <p className="text-sm text-slate-400">Streaming nodes + governance token</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-orange-900/30 to-orange-600/20 rounded-lg p-4 border border-orange-500/30">
                    <p className="text-lg font-bold text-orange-400 mb-2">Chainlink</p>
                    <p className="text-sm text-slate-300">Oracle for price feeds</p>
                    <p className="text-2xl font-bold text-orange-300 mt-2">$10B+ FDV</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/20 rounded-lg p-4 border border-blue-500/30">
                    <p className="text-lg font-bold text-blue-400 mb-2">The Graph</p>
                    <p className="text-sm text-slate-300">Indexing protocol</p>
                    <p className="text-2xl font-bold text-blue-300 mt-2">$2B+ FDV</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/20 rounded-lg p-4 border border-purple-500/30">
                    <p className="text-lg font-bold text-purple-400 mb-2">ClickShift</p>
                    <p className="text-sm text-slate-300">Oracle for predictions</p>
                    <p className="text-2xl font-bold text-purple-300 mt-2">$10B+ potential</p>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 9: Multichain Expansion */}
            {currentSlide === 8 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">Multichain Expansion Strategy</h2>

                <div className="mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold mb-2">S</div>
                      <p className="text-sm text-slate-300">Solana</p>
                      <p className="text-xs text-green-400">Live Now</p>
                    </div>
                    <ArrowRight className="h-8 w-8 text-slate-400" />
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl font-bold mb-2">B</div>
                      <p className="text-sm text-slate-300">Base</p>
                      <p className="text-xs text-yellow-400">Q2 2026</p>
                    </div>
                    <ArrowRight className="h-8 w-8 text-slate-400" />
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-3xl font-bold mb-2">S</div>
                      <p className="text-sm text-slate-300">Sui</p>
                      <p className="text-xs text-slate-400">Q4 2026</p>
                    </div>
                    <ArrowRight className="h-8 w-8 text-slate-400" />
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center text-3xl font-bold mb-2">A</div>
                      <p className="text-sm text-slate-300">Arbitrum</p>
                      <p className="text-xs text-slate-400">Q2 2027</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/20 rounded-xl p-6 border border-purple-500/30">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <span className="text-purple-400 mr-2">Solana (Live)</span>
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      </h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Fastest chain, lowest fees</li>
                        <li>• 525+ users already onboarded</li>
                        <li>• $40B+ TVL ecosystem</li>
                        <li>• Perfect for high-frequency trading</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Base (Q2 2026)</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Coinbase = 110M user access</li>
                        <li>• Fastest growing L2 (400% YoY)</li>
                        <li>• $3.4B TVL and growing</li>
                        <li>• Best for mainstream adoption</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-600/20 rounded-xl p-6 border border-cyan-500/30">
                      <h3 className="text-xl font-bold mb-4 text-cyan-400">Sui (Q4 2026)</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• 44% TVL growth in 30 days</li>
                        <li>• Move language = more secure</li>
                        <li>• Asia expansion opportunity</li>
                        <li>• Google Cloud partnership</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/30 to-green-600/20 rounded-xl p-6 border border-green-500/30">
                      <h3 className="text-xl font-bold mb-4 text-green-400">Arbitrum (Q2 2027)</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Most mature L2 ecosystem</li>
                        <li>• 400+ active protocols</li>
                        <li>• Ethereum alignment</li>
                        <li>• Institutional preference</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/30 text-center">
                  <p className="text-xl font-bold mb-2">
                    Total Addressable Users Across 4 Chains: <span className="text-orange-400">200M+</span>
                  </p>
                  <p className="text-slate-400">
                    Each chain expansion = 3-5x user growth opportunity
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 10: Team */}
            {currentSlide === 9 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">Why We Win</h2>

                <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 mb-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold">
                      EO
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2">Emmanuel Ohanwe</h3>
                      <p className="text-xl text-purple-400 mb-4">Founder & CEO</p>
                      <div className="space-y-3 text-slate-300">
                        <p className="text-lg">
                          <span className="font-semibold">The Pain:</span> Lost 9 months salary to crypto trading. That pain drives our mission.
                        </p>
                        <p className="text-lg">
                          <span className="font-semibold">The Vision:</span> Building the safety net that will onboard 80% of the world to Web3.
                        </p>
                        <p className="text-lg">
                          <span className="font-semibold">The Execution:</span> Built 2 products to 525 DAU in 4 months with $0 budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <Rocket className="h-8 w-8 text-orange-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Founder-Market Fit</h4>
                    <p className="text-slate-300 text-sm">Personal experience + technical skills + relentless execution</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <Brain className="h-8 w-8 text-purple-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Technical Innovation</h4>
                    <p className="text-slate-300 text-sm">Patent-pending algorithms that competitors can't replicate</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <Users className="h-8 w-8 text-blue-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Community First</h4>
                    <p className="text-slate-300 text-sm">91 NPS score shows we build what users actually want</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Post-Funding Team Expansion</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-3">Technical Hires</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Senior AI/ML Engineer (predictions)</li>
                        <li>• Blockchain Protocol Developer</li>
                        <li>• Full-Stack Engineer (scaling)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3">Business Hires</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Head of Growth (ex-Binance/Coinbase)</li>
                        <li>• Community Manager</li>
                        <li>• Business Development (partnerships)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 11: The Ask */}
            {currentSlide === 10 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  The Ask: $1.5M Seed Round
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-green-900/30 to-emerald-600/20 rounded-xl p-8 border border-green-500/30">
                    <h3 className="text-3xl font-bold mb-6 text-green-400">Investment Terms</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                        <span className="text-slate-300 text-lg">Round Size:</span>
                        <span className="text-2xl font-bold">$1.5M</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                        <span className="text-slate-300 text-lg">Valuation:</span>
                        <span className="text-2xl font-bold">$10M post</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                        <span className="text-slate-300 text-lg">Structure:</span>
                        <span className="text-xl font-bold">SAFE</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-lg">Runway:</span>
                        <span className="text-xl font-bold">18 months</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/20 rounded-xl p-8 border border-blue-500/30">
                    <h3 className="text-3xl font-bold mb-6 text-blue-400">Use of Funds</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Engineering (40%)</span>
                        <span className="font-bold">$600K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Growth & Marketing (25%)</span>
                        <span className="font-bold">$375K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">AI Infrastructure (20%)</span>
                        <span className="font-bold">$300K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Operations (10%)</span>
                        <span className="font-bold">$150K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Legal & Compliance (5%)</span>
                        <span className="font-bold">$75K</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">18-Month Milestones</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-orange-300">Product Milestones</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>Launch paid tiers (Q1 2026)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>Base chain expansion (Q2 2026)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>API for third-party apps (Q3 2026)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>Auto-trading bot launch (Q4 2026)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-blue-300">Business Milestones</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-blue-400" />
                          <span>10,000 total users</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-blue-400" />
                          <span>$2M ARR run rate</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-blue-400" />
                          <span>3 enterprise partnerships</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-blue-400" />
                          <span>Series A ready ($10M @ $50M)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30 text-center">
                  <p className="text-xl font-bold">
                    Join us in building the future of DeFi intelligence
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 12: Why Now */}
            {currentSlide === 11 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center">Why Now?</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-orange-900/30 to-red-600/20 rounded-xl p-8 border border-orange-500/30">
                    <AlertCircle className="h-8 w-8 text-orange-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">Market Timing</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Crypto entering new bull cycle</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Prediction markets exploding (Polymarket $3B+)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>AI capabilities finally mature enough</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-400">•</span>
                        <span>Regulatory clarity improving globally</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-blue-600/20 rounded-xl p-8 border border-purple-500/30">
                    <Activity className="h-8 w-8 text-purple-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Momentum</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>525 DAU growing 22% WoW</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>91 NPS = product-market fit</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>Patent-pending technology</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>Zero competitors with our approach</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-500/30 mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-red-400 text-center">The Risk of Waiting</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-red-400 mb-2">6 months</div>
                      <p className="text-slate-300">Competitors copy our model</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-400 mb-2">12 months</div>
                      <p className="text-slate-300">Lose first-mover advantage</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-400 mb-2">18 months</div>
                      <p className="text-slate-300">Market opportunity captured by others</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-green-400 text-center">The Opportunity</h3>
                  <p className="text-xl text-center text-slate-300 mb-6">
                    We're at the perfect intersection of market need, technical capability, and user demand.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <p className="font-bold">First Mover</p>
                      <p className="text-sm text-slate-400">No one else doing predictive intelligence</p>
                    </div>
                    <div>
                      <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <p className="font-bold">Proven Traction</p>
                      <p className="text-sm text-slate-400">525 DAU validates demand</p>
                    </div>
                    <div>
                      <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <p className="font-bold">Protocol Vision</p>
                      <p className="text-sm text-slate-400">$10B+ opportunity as infrastructure</p>
                    </div>
                  </div>
                </div>
              </Slide>
            )}

            {/* Slide 13: Vision */}
            {currentSlide === 12 && (
              <Slide>
                <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                  The Vision: 80% of the World Onchain by 2030
                </h2>

                <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 mb-8">
                  <p className="text-2xl text-center text-slate-200 mb-6 italic">
                    "When 80% of the world is onchain, solutions like Polymarket, borderless payments, and decentralized finance reach their full potential."
                  </p>
                  <p className="text-center text-slate-400">
                    ClickShift is the bridge that makes this future possible.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                    <div className="text-4xl mb-4">🛡️</div>
                    <h4 className="font-bold text-lg mb-2 text-green-400">2026: Safety Layer</h4>
                    <p className="text-sm text-slate-300">100K users protected from scams and poor timing</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                    <div className="text-4xl mb-4">🌐</div>
                    <h4 className="font-bold text-lg mb-2 text-blue-400">2027: Protocol Launch</h4>
                    <p className="text-sm text-slate-300">Prediction infrastructure for entire Web3</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h4 className="font-bold text-lg mb-2 text-purple-400">2028: Mass Adoption</h4>
                    <p className="text-sm text-slate-300">10M+ users onboarded safely to Web3</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
                  <h3 className="text-2xl font-bold mb-6 text-center">The ClickShift Future</h3>
                  <div className="space-y-4 text-lg text-slate-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400">1.</span>
                      <p>Every DEX integrates our predictions for safer trading</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400">2.</span>
                      <p>Every wallet shows our legitimacy scores before transactions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400">3.</span>
                      <p>Every new Web3 user learns through our safe simulation</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400">4.</span>
                      <p>$SHIFT token powers the prediction economy</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30 text-center">
                  <p className="text-2xl font-bold text-green-400">
                    We're not just building a product. We're building the infrastructure for the next financial system.
                  </p>
                </div>
              </Slide>
            )}

            {/* Slide 14: Contact */}
            {currentSlide === 13 && (
              <Slide className="flex items-center justify-center">
                <div className="text-center max-w-3xl">
                  <div className="text-8xl mb-8">⚡</div>
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Let's Build the Future Together
                  </h2>
                  
                  <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 mb-8">
                    <div className="space-y-4 text-xl">
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-slate-400">📧</span>
                        <a href="mailto:emmanuel@clickshift.io" className="text-blue-400 hover:text-blue-300 transition-colors">
                          emmanuel@clickshift.io
                        </a>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-slate-400">🌐</span>
                        <a href="https://clickshift.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                          clickshift.io
                        </a>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-slate-400">💬</span>
                        <a href="https://t.me/clickshift" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                          t.me/clickshift
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <a 
                      href="https://alpha.clickshift.io" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Try Alpha Live</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://leverage.clickshift.io" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Try Leverage Live</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>

                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
                    <p className="text-xl font-bold text-green-400 mb-2">
                      The future of DeFi is predictive. Let's build it together.
                    </p>
                    <p className="text-lg text-slate-300">
                      525 users | 91 NPS | 73% accuracy | $0 CAC
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-slate-400 text-lg">
                      Thank you for your time and consideration.
                    </p>
                    <p className="text-2xl font-bold mt-4 text-purple-400">
                      — Emmanuel Ohanwe, Founder & CEO
                    </p>
                  </div>
                </div>
              </Slide>
            )}

          </div>
        </div>

        {/* Navigation Bar */}
        <div className="relative z-20 flex items-center justify-between px-8 py-6 bg-slate-900/80 backdrop-blur-lg border-t border-slate-800">
          
          {/* Previous Button */}
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

          {/* Dot Indicators */}
          <div className="flex items-center space-x-2 overflow-x-auto max-w-md">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-600' 
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === totalSlides - 1
                ? 'bg-slate-800/30 text-slate-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
            }`}
          >
            <span className="hidden md:inline">Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Keyboard Hint */}
      <div className="absolute bottom-24 right-8 bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-700 text-xs text-slate-400">
        Use ← → arrow keys
      </div>
    </div>
  );
};

export default ClickShiftPitchDeck;