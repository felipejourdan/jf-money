import React from 'react'
import { Summary } from '../Summury'
import { TransactionTable } from '../TransactionTable'
import { Container } from './styles'

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}
