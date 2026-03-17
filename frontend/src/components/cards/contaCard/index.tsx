import { useState } from 'react'
import { ContaProps } from '../../../types'
import { encerrarConta } from '../../../services/api'
import { ModalDepositar } from '../../modal/depositar'
import { ModalSacar } from '../../modal/sacar'
import { ModalTransferir } from '../../modal/transferir'
import { ModalConfirmar } from '../../modal/confirmar'
import toast from 'react-hot-toast'

interface ContaCardProps {
  conta: ContaProps
  onAtualizar: () => void
}

type ModalAberto = 'depositar' | 'sacar' | 'transferir' | 'encerrar' | null

export function ContaCard({ conta, onAtualizar }: ContaCardProps) {
  const [modalAberto, setModalAberto] = useState<ModalAberto>(null)
  const [loading, setLoading] = useState(false)

  async function handleEncerrar() {
    setLoading(true)
    try {
      await encerrarConta(conta.numero)
      toast.success('Conta encerrada com sucesso!')
      onAtualizar()
      setModalAberto(null)
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : 'Erro ao encerrar conta')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 md:p-6 hover:border-purple-800 transition-all">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-base md:text-lg font-semibold">{conta.titular.nome}</p>
            <p className='text-gray-400 text-xs md:text-sm'>Email: {conta.titular.email}</p>
            <p className="text-gray-400 text-xs md:text-sm">Conta: #{conta.numero}</p>
          </div>
          <div className="text-right ml-2">
            <p className="text-purple-500 text-base md:text-xl font-bold break-words">
              {conta.saldo.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
          <button
            onClick={() => setModalAberto('depositar')}
            className="bg-gray-800 hover:bg-purple-800 text-white text-xs md:text-sm font-medium py-2 rounded-xl transition-colors"
          >
            Depositar
          </button>
          <button
            onClick={() => setModalAberto('sacar')}
            className="bg-gray-800 hover:bg-purple-800 text-white text-xs md:text-sm font-medium py-2 rounded-xl transition-colors"
          >
            Sacar
          </button>
          <button
            onClick={() => setModalAberto('transferir')}
            className="bg-gray-800 hover:bg-purple-800 text-white text-xs md:text-sm font-medium py-2 rounded-xl transition-colors"
          >
            Transferir
          </button>
          <button
            onClick={() => setModalAberto('encerrar')}
            className="bg-gray-800 hover:bg-red-800 text-white text-xs md:text-sm font-medium py-2 rounded-xl transition-colors"
          >
            Encerrar
          </button>
        </div>
      </div>

      {modalAberto === 'depositar' && (
        <ModalDepositar
          numeroConta={conta.numero}
          onClose={() => setModalAberto(null)}
          onSucesso={onAtualizar}
        />
      )}
      {modalAberto === 'sacar' && (
        <ModalSacar
          numeroConta={conta.numero}
          onClose={() => setModalAberto(null)}
          onSucesso={onAtualizar}
        />
      )}
      {modalAberto === 'transferir' && (
        <ModalTransferir
          numeroConta={conta.numero}
          onClose={() => setModalAberto(null)}
          onSucesso={onAtualizar}
        />
      )}
      {modalAberto === 'encerrar' && (
        <ModalConfirmar
          titulo="Encerrar conta"
          mensagem={`Tem certeza que deseja encerrar a conta #${conta.numero} de ${conta.titular.nome}? Esta ação não pode ser desfeita.`}
          onConfirmar={handleEncerrar}
          onClose={() => setModalAberto(null)}
          loading={loading}
        />
      )}
    </>
  )
}