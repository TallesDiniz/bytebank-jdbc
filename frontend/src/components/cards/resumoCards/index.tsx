import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { ContaProps } from '../../../types'

interface ResumoCardsProps {
  contas: ContaProps[]
}

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 1, ease: 'easeOut' })
    }
  }, [inView, value, motionValue])

  return <motion.p ref={ref} className="text-2xl md:text-3xl font-bold mt-1">{rounded}</motion.p>
}

function AnimatedCurrency({ value }: { value: number }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const motionValue = useMotionValue(0)
  const inView = useInView(ref, { once: true })
  const formatted = useTransform(motionValue, (v) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  )

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 1, ease: 'easeOut' })
    }
  }, [inView, value, motionValue])

  return <motion.p ref={ref} className="text-2xl md:text-3xl font-bold mt-1 text-purple-500 break-words">{formatted}</motion.p>
}

export function ResumoCards({ contas }: ResumoCardsProps) {
  const saldoTotal = contas.reduce((acc, c) => acc + c.saldo, 0)

  return (
    <div className="grid grid-cols-2 gap-4 mb-10">
      <motion.div
        className="bg-gray-900 rounded-2xl p-4 md:p-6 border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-400 text-sm">Total de contas</p>
        <AnimatedNumber value={contas.length} />
      </motion.div>

      <motion.div
        className="bg-gray-900 rounded-2xl p-4 md:p-6 border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <p className="text-gray-400 text-sm">Saldo total</p>
        <AnimatedCurrency value={saldoTotal} />
      </motion.div>
    </div>
  )
}