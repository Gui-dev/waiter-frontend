import { useState } from 'react'
import { toast } from 'react-toastify'

import { api } from '../../services/api'

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
  onCancelOrder: (orderId: string) => Promise<void>
}

export const OrdersBoard = ({ icon, title, orders, onCancelOrder }: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<OrderProps | null>(null)

  const handleOpenModal = (order: OrderProps) => {
    setIsModalVisible(!isModalVisible)
    setSelectedOrder(order)
  }

  const handleCancelOrder = async () => {
    try {
      setIsLoading(true)
      await api.delete(`/orders/${selectedOrder?._id}`)
      onCancelOrder(selectedOrder!._id)
      setIsModalVisible(false)
      toast.success(`O pedido da mesa ${selectedOrder!.table} foi cancelado`)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <OrderModal
        visible={isModalVisible}
        onModalVisible={setIsModalVisible}
        order={selectedOrder}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
      />
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
