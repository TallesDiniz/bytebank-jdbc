import { ContaProps } from '../../../types'


interface ResumoCardsProps {
  contas: ContaProps[]
}

export function ResumoCards({ contas }: ResumoCardsProps) {
  const saldoTotal = contas.reduce((acc, c) => acc + c.saldo, 0)

  return (
    <div className="grid grid-cols-2 gap-4 mb-10">
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <p className="text-gray-400 text-sm">Total de contas</p>
        <p className="text-3xl font-bold mt-1">{contas.length}</p>
      </div>
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <p className="text-gray-400 text-sm">Saldo total</p>
        <p className="text-3xl font-bold mt-1 text-purple-500">
          {saldoTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </p>
      </div>
    </div>
  )
}