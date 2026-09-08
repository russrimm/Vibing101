import { Children, isValidElement, type ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from './CodeBlock'

interface MarkdownRendererProps {
  content: string
  className?: string
}

const lessonLinks: Record<string, { step: string; anchor: string }> = {
  'lab-00-prerequisites.md': { step: 'setup', anchor: 'lab-00' },
  'lab-01-plan.md': { step: 'structure', anchor: 'lab-01' },
  'lab-02-build.md': { step: 'structure', anchor: 'lab-02' },
  'lab-03-test-and-save.md': { step: 'testing', anchor: 'lab-03' },
  'lab-04-completion.md': { step: 'completion', anchor: 'lab-04' },
  'lab-05-next-steps.md': { step: 'whatsnext', anchor: 'lab-05' },
}

function resolveLessonLink(href: string | undefined): string | undefined {
  if (!href || /^[a-z][a-z0-9+.-]*:|^#/i.test(href)) return href
  const lesson = lessonLinks[href]
  const industry = new URLSearchParams(window.location.search).get('industry')
  if (lesson && industry) {
    return `?industry=${encodeURIComponent(industry)}&step=${lesson.step}#${lesson.anchor}`
  }
  return href.includes('.md')
    ? new URL(href, 'https://github.com/russrimm/Vibing101/blob/main/docs/')
        .href
    : href
}

export function MarkdownRenderer({
  content,
  className = '',
}: MarkdownRendererProps) {
  return (
    <div
      className={`min-w-0 break-words text-slate-800 dark:text-slate-200 ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ children }) {
            const block = Children.toArray(children)[0]
            if (
              isValidElement<{ children?: ReactNode; className?: string }>(
                block
              )
            ) {
              const language =
                block.props.className?.replace('language-', '') ?? 'text'
              return (
                <CodeBlock
                  code={String(block.props.children ?? '').replace(/\n$/, '')}
                  language={language}
                />
              )
            }
            return (
              <pre className="my-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-slate-100">
                {children}
              </pre>
            )
          },
          code({ children }) {
            return (
              <code className="rounded bg-slate-200 px-1 py-0.5 text-sm text-slate-900 dark:bg-slate-700 dark:text-slate-100">
                {children}
              </code>
            )
          },
          h1({ children }) {
            const number = /Lab (\d{2})/.exec(String(children))?.[1]
            return (
              <h2
                id={number ? `lab-${number}` : undefined}
                tabIndex={-1}
                className="mb-5 mt-4 text-3xl font-bold"
              >
                {children}
              </h2>
            )
          },
          h2({ children }) {
            return (
              <h3 className="mb-3 mt-8 border-b border-slate-300 pb-2 text-2xl font-bold dark:border-slate-600">
                {children}
              </h3>
            )
          },
          h3({ children }) {
            return <h4 className="mb-3 mt-6 text-xl font-bold">{children}</h4>
          },
          h4({ children }) {
            return <h5 className="mb-2 mt-4 text-lg font-bold">{children}</h5>
          },
          p({ children }) {
            return <p className="mb-4 leading-relaxed">{children}</p>
          },
          a({ href, children }) {
            const target = resolveLessonLink(href)
            const external =
              target?.startsWith('https://') || target?.startsWith('http://')
            return (
              <a
                href={target}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-cyan-800 underline underline-offset-2 hover:text-cyan-950 dark:text-cyan-300 dark:hover:text-cyan-200"
              >
                {children}
              </a>
            )
          },
          ul({ children }) {
            return (
              <ul className="mb-4 ml-6 list-outside list-disc space-y-2">
                {children}
              </ul>
            )
          },
          ol({ children, start }) {
            return (
              <ol
                start={start}
                className="mb-4 ml-6 list-outside list-decimal space-y-3"
              >
                {children}
              </ol>
            )
          },
          li({ children }) {
            return <li className="pl-1 leading-relaxed">{children}</li>
          },
          blockquote({ children }) {
            return (
              <blockquote className="my-4 rounded-r-lg border-l-4 border-cyan-700 bg-cyan-50 p-4 dark:bg-slate-700">
                {children}
              </blockquote>
            )
          },
          table({ children }) {
            return (
              <div className="my-5 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  {children}
                </table>
              </div>
            )
          },
          th({ children }) {
            return (
              <th className="border border-slate-400 bg-slate-100 p-3 font-semibold dark:bg-slate-800">
                {children}
              </th>
            )
          },
          td({ children }) {
            return (
              <td className="border border-slate-400 p-3 align-top">
                {children}
              </td>
            )
          },
          hr() {
            return (
              <hr className="my-6 border-slate-300 dark:border-slate-600" />
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
