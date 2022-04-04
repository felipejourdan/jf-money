import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export const TransactionTable = () => {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data))
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
          <tr>
            <td>Desenvolvimento Website</td>
            <td className="deposit">R$ 8.000,00</td>
            <td>Freelance</td>
            <td>29/01/2022</td>
          </tr>
          <tr>
            <td>Super Mercado</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Compras</td>
            <td>25/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
