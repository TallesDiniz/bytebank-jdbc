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
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Contas ativas</h2>

      {loading ? (
        <p className="text-gray-500">Carregando contas...</p>
      ) : contas.length === 0 ? (
        <p className="text-gray-500">Nenhuma conta cadastrada.</p>
      ) : (
        <div className="grid gap-4">
          {contas.map(conta => (
            <ContaCard key={conta.numero} conta={conta} onAtualizar={onAtualizar} />
          ))}
        </div>
      )}
    </div>
  )
}