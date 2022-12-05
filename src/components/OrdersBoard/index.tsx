import { useState } from 'react'

import { OrderModal } from '../OrderModal'
import { Container, OrdersContainer } from './style'

type ProductProps = {
  name: string
  imagePath: string
  price: number
}

export type OrderProps = {
  _id: string
  table: string
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
  products: Array<{
    _id: string
    quantity: number
    product: ProductProps
  }>
}

type OrdersBoardProps = {
  icon: string
  title: string
  orders: OrderProps[]
}

export const OrdersBoard = ({ icon, title, orders }: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<OrderProps | null>(null)

  const handleOpenModal = (order: OrderProps) => {
    setIsModalVisible(!isModalVisible)
    setSelectedOrder(order)
  }
  return (
    <Container>
      <OrderModal visible={isModalVisible} onModalVisible={setIsModalVisible} order={selectedOrder} />
      <header>
        <span>{icon}</span>
        <h1>{title}</h1>
        <span>(1)</span>
      </header>
      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(order => {
            return (
              <button key={order._id} onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            )
          })}
        </OrdersContainer>
      )}
    </Container>
  )
}
