interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <button
          onClick={handleCopy}
          className="px-3 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors shadow-lg"
          title="Copy to clipboard"
        >
          Copy
        </button>
      </div>
      <pre className="bg-slate-900 text-slate-300 p-4 rounded-lg overflow-x-auto border border-white/10">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
