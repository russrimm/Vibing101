import Modal from './Modal'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="about-title">
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id="about-title" className="text-xl font-bold">
            About this lab
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Close
          </button>
        </div>
        <p className="mb-4 leading-relaxed">
          Russ Rimmerman created this lab to help first-time builders learn how
          to work with AI. The goal is a small, working local demo and the
          confidence to explain and test it, not a production system.
        </p>
        <p className="mb-4 leading-relaxed">
          You work in the GitHub Copilot desktop app. This portal provides
          instructions and saves your self-reported progress in this browser. It
          cannot inspect your computer, confirm account access, or verify your
          app automatically.
        </p>
        <a
          href="https://www.linkedin.com/in/russrimm"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-cyan-800 underline hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200"
        >
          Meet the author on LinkedIn
        </a>
      </div>
    </Modal>
  )
}
