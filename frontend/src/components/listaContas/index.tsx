import { motion } from 'framer-motion'
import { ContaProps } from "../../types"
import { ContaCard } from "../cards/contaCard"

interface ListaContasProps {
  contas: ContaProps[]
  loading: boolean
  onAtualizar: () => void
}

export function ListaContas({ contas, loading, onAtualizar }: ListaContasProps) {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-200">Contas ativas</h2>

      {loading ? (
        <p className="text-gray-500">Carregando contas...</p>
      ) : contas.length === 0 ? (
        <p className="text-gray-500">Nenhuma conta cadastrada.</p>
      ) : (
        <div className="grid gap-4">
          {contas.map((conta, index) => (
            <motion.div
              key={conta.numero}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ContaCard conta={conta} onAtualizar={onAtualizar} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}