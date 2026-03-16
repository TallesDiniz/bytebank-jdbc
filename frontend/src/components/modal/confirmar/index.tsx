import { Modal } from "../modal"

interface ModalConfirmarProps {
  titulo: string
  mensagem: string
  onConfirmar: () => void
  onClose: () => void
  loading?: boolean
}

export function ModalConfirmar({ titulo, mensagem, onConfirmar, onClose, loading }: ModalConfirmarProps) {
  return (
    <Modal titulo={titulo} onClose={onClose}>
      <div className="flex flex-col gap-6">
        <p className="text-gray-400">{mensagem}</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onClose}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirmar}
            disabled={loading}
            className="bg-red-800 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-50"
          >
            {loading ? 'Encerrando...' : 'Confirmar'}
          </button>
        </div>
      </div>
    </Modal>
  )
}