import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { GlossaryTooltip } from './GlossaryTooltip'
import glossaryData from '../data/glossary.json'

interface MarkdownRendererProps {
  content: string
  className?: string
}

// Terms that should be wrapped with glossary tooltips
const glossaryTerms = Object.keys(glossaryData)

// Function to wrap glossary terms in markdown content
const wrapGlossaryTerms = (text: string): React.ReactNode => {
  if (!text) return text

  // Sort terms by length (longest first) to match longer terms before shorter ones
  const sortedTerms = [...glossaryTerms].sort((a, b) => {
    const termA = (glossaryData as any)[a].term
    const termB = (glossaryData as any)[b].term
    return termB.length - termA.length
  })

  const result: React.ReactNode[] = []
  let lastIndex = 0
  const matches: {
    index: number
    term: string
    key: string
    length: number
  }[] = []

  // Find all term matches
  sortedTerms.forEach((key) => {
    const entry = (glossaryData as any)[key]
    const term = entry.term
    const regex = new RegExp(`\\b${term}\\b`, 'gi')
    let match

    while ((match = regex.exec(text)) !== null) {
      // Check if this position is not already covered by a longer term
      const overlaps = matches.some(
        (m) => match.index >= m.index && match.index < m.index + m.length
      )
      if (!overlaps) {
        matches.push({
          index: match.index,
          term: match[0],
          key,
          length: match[0].length,
        })
      }
    }
  })

  // Sort matches by index
  matches.sort((a, b) => a.index - b.index)

  // Build result with wrapped terms
  matches.forEach((match, i) => {
    // Add text before match
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index))
    }

    // Add wrapped term
    result.push(
      <GlossaryTooltip key={`${match.key}-${i}`} term={match.key}>
        {match.term}
      </GlossaryTooltip>
    )

    lastIndex = match.index + match.length
  })

  // Add remaining text
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex))
  }

  return result.length > 0 ? result : text
}

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  return (
    <div className={`prose prose-invert prose-cyan max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Code blocks with syntax highlighting
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                className="rounded-lg !bg-slate-900 !my-4"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code
                className="bg-slate-800 text-cyan-400 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            )
          },

          // Headings
          h1({ children }) {
            return (
              <h1 className="text-4xl font-bold text-white mb-6 mt-8 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {children}
              </h1>
            )
          },
          h2({ children }) {
            return (
              <h2 className="text-3xl font-bold text-white mb-4 mt-8 border-b border-white/10 pb-2">
                {children}
              </h2>
            )
          },
          h3({ children }) {
            return (
              <h3 className="text-2xl font-bold text-white mb-3 mt-6">
                {children}
              </h3>
            )
          },

          // Paragraphs with glossary term wrapping
          p({ children }) {
            const processChildren = (child: any): any => {
              if (typeof child === 'string') {
                return wrapGlossaryTerms(child)
              }
              if (Array.isArray(child)) {
                return child.map(processChildren)
              }
              return child
            }

            return (
              <p className="text-slate-300 leading-relaxed mb-4">
                {processChildren(children)}
              </p>
            )
          },

          // Links
          a({ href, children }) {
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-colors"
              >
                {children}
              </a>
            )
          },

          // Lists
          ul({ children }) {
            return (
              <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4 ml-4">
                {children}
              </ul>
            )
          },
          ol({ children }) {
            return (
              <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-4 ml-4">
                {children}
              </ol>
            )
          },
          li({ children }) {
            return <li className="leading-relaxed">{children}</li>
          },

          // Blockquotes
          blockquote({ children }) {
            return (
              <blockquote className="border-l-4 border-cyan-500 bg-cyan-500/10 pl-4 py-3 my-4 rounded-r-lg">
                <div className="text-slate-300 italic">{children}</div>
              </blockquote>
            )
          },

          // Tables
          table({ children }) {
            return (
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-white/10 rounded-lg overflow-hidden">
                  {children}
                </table>
              </div>
            )
          },
          thead({ children }) {
            return (
              <thead className="bg-slate-800 border-b border-white/10">
                {children}
              </thead>
            )
          },
          tbody({ children }) {
            return <tbody className="bg-slate-900/50">{children}</tbody>
          },
          tr({ children }) {
            return (
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                {children}
              </tr>
            )
          },
          th({ children }) {
            return (
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-400">
                {children}
              </th>
            )
          },
          td({ children }) {
            return (
              <td className="px-4 py-3 text-sm text-slate-300">{children}</td>
            )
          },

          // Horizontal rule
          hr() {
            return <hr className="border-white/10 my-8" />
          },

          // Strong/Bold
          strong({ children }) {
            return <strong className="font-bold text-white">{children}</strong>
          },

          // Emphasis/Italic
          em({ children }) {
            return <em className="italic text-cyan-300">{children}</em>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
