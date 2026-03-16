interface MessageErrorProps {
  mensagem: string
}

export function MensagemErro({ mensagem }: MessageErrorProps) {
  return (
    <div className="bg-red-900/40 border border-red-700 text-red-400 text-sm rounded-xl p-3 mt-2">
      {mensagem}
    </div>
  )
}