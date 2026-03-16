export interface TitularProps {
  nome: string
  cpf: string
  email: string
}

export interface ContaProps {
  numero: number
  saldo: number
  titular: TitularProps
}

export interface DadosAberturaConta {
  numero: number
  dadosCliente: {
    nome: string
    cpf: string
    email: string
  }
}

export interface DadosDeposito {
  numero: number
  valor: number
}

export interface DadosSaque {
  numero: number
  valor: number
}

export interface DadosTransferencia {
  pagador: number
  beneficiado: number
  valor: number
}