import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import socketIo from 'socket.io-client'

import { OrderProps, OrdersBoard } from '../OrdersBoard'
import { Container, LoadingContainer } from './style'

import { api } from '../../services/api'

export const Orders = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState<OrderProps[]>([])

  const handleCancelOrder = async (orderId: string) => {
    setOrders(prevState => prevState.filter(order => order._id !== orderId))
  }

  const handleOrderStatusChange = async (orderId: string, status: OrderProps['status']) => {
    setOrders(prevState => prevState.map(order => {
      return order._id === orderId
        ? {
          ...order,
          status
        }
        : order
    }))
  }

  useEffect(() => {
    const socket = socketIo('http://192.168.0.106:3333', {
      transports: ['websocket']
    })
    socket.on('order@new', order => {
      setOrders(prevState => prevState.concat(order))
    })
  }, [])

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
        onOrderChangeStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onOrderChangeStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onOrderChangeStatus={handleOrderStatusChange}
      />
    </Container>
  )
}
