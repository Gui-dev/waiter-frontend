import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { OrderProps, OrdersBoard } from '../OrdersBoard'
import { Container, LoadingContainer } from './style'

import { api } from '../../services/api'

export const Orders = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState<OrderProps[]>([])

  const handleCancelOrder = async (orderId: string) => {
    setOrders(prevState => prevState.filter(order => order._id !== orderId))
  }

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

  if (isLoading) {
    return (
      <LoadingContainer>
        <ClipLoader
          color="#D73035"
          loading={isLoading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </LoadingContainer>
    )
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
      />
    </Container>
  )
}
