import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  titulo: string
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ titulo, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-end md:items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 border border-gray-800 rounded-t-2xl md:rounded-2xl p-6 md:p-8 w-full md:max-w-md"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg md:text-xl font-bold text-white">{titulo}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
            >
              &times;
            </button>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}