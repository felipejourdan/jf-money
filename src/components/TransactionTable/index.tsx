import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

interface transactionProps {
  id: number
  title: string
  type: string
  category: string
  amount: number
  atDate: string
}

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState<transactionProps[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td> {transaction.title} </td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category} </td>

              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.atDate)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
