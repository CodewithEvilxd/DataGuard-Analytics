"use client"

import { Database } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"

interface HeaderProps {
  showBackButton?: boolean
  onBack?: () => void
}

export function Header({ showBackButton = false, onBack }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && onBack && (
              <button
                onClick={onBack}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                ← Back
              </button>
            )}
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  DataGuard Analytics
                </h1>
                {!showBackButton && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Browser-based DuckDB • Zero server involvement
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {showBackButton && (
              <>
                <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  DuckDB Active
                </div>
                <button
                  onClick={() => {
                    const event = new KeyboardEvent("keydown", {
                      key: "k",
                      metaKey: true,
                      bubbles: true,
                    })
                    window.dispatchEvent(event)
                  }}
                  className="hidden md:flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  title="Open Command Palette"
                >
                  <span>⌘K</span>
                </button>
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
