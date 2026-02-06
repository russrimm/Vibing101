import { FC, useState, useRef, useEffect } from 'react'
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import glossaryData from '../data/glossary.json'

interface GlossaryEntry {
  term: string
  emoji: string
  definition: string
  example: string
  learnMore: string
}

interface GlossaryTooltipProps {
  term: string
  children: React.ReactNode
}

export const GlossaryTooltip: FC<GlossaryTooltipProps> = ({
  term,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const timeoutRef = useRef<number>()

  const glossary = glossaryData as Record<string, GlossaryEntry>
  const entry = glossary[term]

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  if (!entry) {
    return <>{children}</>
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(true)
      }, 300)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(false)
      }, 200)
    }
  }

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <>
      <span
        ref={refs.setReference}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative inline-block cursor-help border-b-2 border-dotted border-cyan-400/60 hover:border-cyan-400 transition-colors"
        aria-describedby={isOpen ? `tooltip-${term}` : undefined}
      >
        {children}
      </span>

      <AnimatePresence>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="z-50 w-80 max-w-[calc(100vw-2rem)]"
            id={`tooltip-${term}`}
            role="tooltip"
            onMouseEnter={() => {
              if (!isMobile && timeoutRef.current) {
                clearTimeout(timeoutRef.current)
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="bg-slate-800 border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-linear-to-r from-cyan-500/20 to-emerald-500/20 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl" aria-hidden="true">
                    {entry.emoji}
                  </span>
                  <h3 className="text-white font-bold text-sm">{entry.term}</h3>
                </div>
                {isMobile && (
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
                    aria-label="Close tooltip"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Definition */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {entry.definition}
                </p>

                {/* Example */}
                {entry.example && (
                  <div className="bg-slate-900/50 rounded-lg p-3 border border-white/5">
                    <p className="text-xs text-cyan-400 font-semibold mb-1">
                      Example:
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {entry.example}
                    </p>
                  </div>
                )}

                {/* Learn More */}
                {entry.learnMore && (
                  <a
                    href={entry.learnMore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <span>Learn more</span>
                    <ExternalLink
                      size={12}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
              </div>

              {/* Sparkle effect on hover */}
              <div className="absolute top-2 right-2 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="text-yellow-400 text-xl"
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GlossaryTooltip
