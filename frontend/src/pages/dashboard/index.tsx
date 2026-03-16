import { useEffect, useState } from 'react'
import { listarContas } from '../../services/api'
import { ContaProps } from '../../types'
import { Header } from '../../components/header'
import { ResumoCards } from '../../components/cards/resumoCards'
import { ListaContas } from '../../components/listaContas'
import { ModalAbrirConta } from '../../components/modal/abrirConta'

export default function Dashboard() {
  const [contas, setContas] = useState<ContaProps[]>([])
  const [loading, setLoading] = useState(true)
  const [modalAberto, setModalAberto] = useState(false)

  function buscarContas() {
    setLoading(true)
    listarContas()
      .then(setContas)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    buscarContas()
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <Header onAbrirConta={() => setModalAberto(true)} />
      <ResumoCards contas={contas} />
      <ListaContas contas={contas} loading={loading} onAtualizar={buscarContas} />

      {modalAberto && (
        <ModalAbrirConta
         onClose={() => setModalAberto(false)}
         onSucesso={buscarContas}
         />
      )}
    </div>
  )
}