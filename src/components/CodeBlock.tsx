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
          className="px-4 py-2 text-sm bg-cyan-700 hover:bg-cyan-800 text-slate-50 font-black rounded-lg transition-colors shadow-xl shadow-cyan-500/50 border-2 border-cyan-400"
          title="Copy to clipboard"
        >
          <span className="text-slate-50">Copy</span>
        </button>
      </div>
      <pre className="bg-slate-900 text-slate-300 p-4 rounded-lg overflow-x-auto border border-white/10">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
