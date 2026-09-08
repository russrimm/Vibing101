import type { ReactNode } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  labelledBy: string
  children: ReactNode
}

export default function Modal({
  isOpen,
  onClose,
  labelledBy,
  children,
}: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby={labelledBy}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/60" />
      <div className="fixed inset-0 overflow-y-auto overscroll-contain p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-white/10 dark:bg-slate-900 dark:text-white">
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
