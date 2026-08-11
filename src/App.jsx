import React from 'react';
import Navbar from './components/Navbar';
import {
  Sparkles,
  Zap,
  Shield,
  Cpu,
  Check,
  Star,
  ArrowRight,
  Globe,
  Layers,
  BarChart,
  Bot
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-pink-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400 mb-8 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Introducing Aura.ai 2.0</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Build modern AI apps with <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">unmatched speed</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
            Aura.ai powers intelligent workflows, real-time analytics, and automated decision engines for next-generation software development.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
            >
              Watch Demo
            </a>
          </div>

          {/* Feature Highlights Banner */}
          <div className="mt-16 pt-10 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400 max-w-4xl mx-auto text-sm">
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Sub-10ms Latency</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span>Enterprise SOC2</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              <span>Global CDN</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>99.99% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900/50 border-y border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Everything you need to scale AI applications
            </h2>
            <p className="mt-4 text-slate-400">
              Designed for modern engineering teams who demand performance, security, and developer clarity.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Smart Engine</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Adaptive LLM routing automatically optimizes latency and cost for every incoming prompt.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Real-Time Analytics</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Deep observability into token consumption, prompt latency, and user interaction signals.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 text-pink-400">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Modular Architecture</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Integrate with your existing stack effortlessly using standard REST and GraphQL SDKs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Get started in 3 simple steps
            </h2>
            <p className="mt-4 text-slate-400">
              From zero to production-ready AI pipelines in minutes.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative pl-8 border-l-2 border-indigo-500/30">
              <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Step 01</span>
              <h3 className="mt-2 text-xl font-semibold text-white">Connect Your Data</h3>
              <p className="mt-2 text-sm text-slate-400">
                Plug in your database, vector stores, or API endpoints with one-click connectors.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-indigo-500/30">
              <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Step 02</span>
              <h3 className="mt-2 text-xl font-semibold text-white">Configure Workflows</h3>
              <p className="mt-2 text-sm text-slate-400">
                Define prompt chains, safety guardrails, and automated fallback models visually or via code.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-indigo-500/30">
              <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Step 03</span>
              <h3 className="mt-2 text-xl font-semibold text-white">Deploy Globally</h3>
              <p className="mt-2 text-sm text-slate-400">
                Ship to our low-latency edge network and scale seamlessly from 1 to millions of users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900/50 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-slate-400">
              Choose the right plan for your team. Scale as you grow.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Starter</h3>
                <p className="text-xs text-slate-400 mt-1">For side projects & hobbyists</p>
                <div className="mt-6 text-4xl font-extrabold text-white">
                  $0 <span className="text-base font-normal text-slate-400">/ mo</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    Up to 10,000 requests/mo
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    Community Support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    Standard Latency
                  </li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 px-4 rounded-xl font-medium bg-slate-800 hover:bg-slate-700 text-white transition-all">
                Get Started
              </button>
            </div>

            {/* Pro - Featured */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-indigo-500 shadow-xl shadow-indigo-500/10 flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Most Popular
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Pro</h3>
                <p className="text-xs text-slate-400 mt-1">For growing teams & products</p>
                <div className="mt-6 text-4xl font-extrabold text-white">
                  $49 <span className="text-base font-normal text-slate-400">/ mo</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    1,000,000 requests/mo
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    Priority Support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    Ultra-low latency routing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    Advanced Observability
                  </li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 px-4 rounded-xl font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Enterprise</h3>
                <p className="text-xs text-slate-400 mt-1">Custom solutions for scale</p>
                <div className="mt-6 text-4xl font-extrabold text-white">Custom</div>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    Unlimited requests
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    Dedicated SLA & account manager
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    Custom model fine-tuning
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    SOC2 Compliance & SSO
                  </li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 px-4 rounded-xl font-medium bg-slate-800 hover:bg-slate-700 text-white transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Loved by developers everywhere
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Aura.ai cut our AI pipeline integration time from weeks to an afternoon. The latency improvements alone made it worth every penny."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                  JD
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">John Doe</div>
                  <div className="text-xs text-slate-400">CTO, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "The routing engine and real-time observability are top-tier. We slashed our token spending by 40% in the first month."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-sm">
                  AS
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Alice Smith</div>
                  <div className="text-xs text-slate-400">Lead AI Architect, DataFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Aura.ai</span>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Aura.ai, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
