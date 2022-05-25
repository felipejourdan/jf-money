import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'

interface TransactionProps {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

interface transactionProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: TransactionProps[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: transactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
