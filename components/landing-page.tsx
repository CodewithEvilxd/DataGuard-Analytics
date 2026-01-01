"use client"

import { ArrowRight, Database, Shield, Zap, FileText, BarChart3, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClickSpark from "@/components/ui/click-spark"

interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <ClickSpark sparkColor="#3b82f6" sparkCount={8} sparkRadius={20}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative">
        {/* Zigzag Lightning Pattern - Light Theme Only */}
        <div
          className="absolute inset-0 z-0 pointer-events-none dark:hidden"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
              repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
              repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
              repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
            `,
          }}
        />

        {/* Dark Noise Colored Background - Dark Theme Only */}
        <div
          className="absolute inset-0 z-0 hidden dark:block"
          style={{
            background: "#000000",
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
              radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
              radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
            `,
            backgroundSize: "20px 20px, 30px 30px, 25px 25px",
            backgroundPosition: "0 0, 10px 10px, 15px 5px",
          }}
        />

        {/* Additional Dark Gradient Background - Dark Theme Only */}
        <div
          className="absolute inset-0 z-0 hidden dark:block pointer-events-none"
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent 0%,
                transparent 30%,
                rgba(138, 43, 226, 0.4) 50%,
                transparent 70%,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                #1a1a2e 0%,
                #2d1b69 50%,
                #0f0f23 100%
              )
            `,
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 79px,
                rgba(255, 255, 255, 0.05) 80px,
                rgba(255, 255, 255, 0.05) 81px
              )
            `,
          }}
        />

        {/* Dark Dot Matrix Background - Dark Theme Only */}
        <div
          className="absolute inset-0 z-0 hidden dark:block"
          style={{
            backgroundColor: '#0a0a0a',
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
              radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
            `,
            backgroundSize: '10px 10px',
            imageRendering: 'pixelated',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 tracking-wide uppercase">Powered by DuckDB WASM</div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              DataGuard Analytics
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Query your data locally in the browser. Zero server involvement. Complete privacy. Lightning fast.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <Button
            onClick={onGetStarted}
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 py-3"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Features */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose DataGuard?</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the power of SQL analytics without compromising your data privacy
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex gap-4">
                <Database className="w-6 h-6 mt-1 shrink-0 text-gray-600 dark:text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Browser-Based SQL</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Full-featured DuckDB running entirely in your browser. Execute complex SQL queries on CSV, Parquet, and JSON files.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-6 h-6 mt-1 shrink-0 text-gray-600 dark:text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Complete Privacy</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Your data never leaves your device. No uploads, no servers, no tracking. Your analysis stays completely private.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="w-6 h-6 mt-1 shrink-0 text-gray-600 dark:text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Lightning Performance</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Powered by WebAssembly for near-native performance. Query millions of rows in milliseconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <FileText className="w-6 h-6 mt-1 shrink-0 text-gray-600 dark:text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Multiple File Formats</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Support for CSV, Parquet, JSON, and more. Seamlessly query across different data formats.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <BarChart3 className="w-6 h-6 mt-1 shrink-0 text-gray-600 dark:text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Advanced Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Built-in data visualization, statistics, quality checks, and query history. Everything you need in one place.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Sparkles className="w-6 h-6 mt-1 shrink-0 text-gray-600 dark:text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-3 text-lg">No Setup Required</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    No installation, no configuration, no backend. Just open and start analyzing your data instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mb-24">
          <div className="flex justify-center gap-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <span>100% Client-Side</span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span>No Data Upload</span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span>Lightning Fast</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center border-t border-gray-200 dark:border-gray-800 pt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to analyze your data?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
            Start querying your data with complete privacy and lightning-fast performance.
          </p>
          <Button
            onClick={onGetStarted}
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 py-3"
          >
            Launch Analytics Engine
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        </div>
      </div>
    </ClickSpark>
  )
}
