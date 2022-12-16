import { useEffect, useState } from 'react'

import { OrderProps, OrdersBoard } from '../OrdersBoard'
import { Container } from './style'

import { api } from '../../services/api'

export const Orders = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState<OrderProps[]>([])

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const { data } = await api.get('/orders')
        setOrders(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadOrders()
  }, [])

  const waiting = orders.filter(order => order.status === 'WAITING')
  const inProduction = orders.filter(order => order.status === 'IN_PRODUCTION')
  const done = orders.filter(order => order.status === 'DONE')

  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={waiting}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={inProduction}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
      />
    </Container>
  )
}
