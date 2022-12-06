import { useEffect } from 'react'
import { formatCurrency } from '../../utils/formatCurrency'
import { OrderProps } from '../OrdersBoard'
import closeIcon from './../../assets/images/close-icon.svg'
import { Actions, Container, ModalBody, OrderDetails } from './style'

type OrderModalProps = {
  visible: boolean
  order: OrderProps | null
  onModalVisible: (visible: boolean) => void
}

export const OrderModal = ({ visible, order, onModalVisible }: OrderModalProps) => {
  const icon = order?.status === 'WAITING'
    ? '🕒'
    : order?.status === 'IN_PRODUCTION' ? '🧑‍🍳' : '✅'
  const status = order?.status === 'WAITING'
    ? 'Fila de espera'
    : order?.status === 'IN_PRODUCTION' ? 'Em preparação' : 'Pronto!'
  const total = order?.products.reduce((sumTotal, { product, quantity }) => {
    sumTotal += Number(product.price) * Number(quantity)
    return sumTotal
  }, 0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onModalVisible(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onModalVisible])

  if (!visible || !order) {
    return null
  }

  return (
    <Container>
      <ModalBody>
        <header>
          <h1>Mesa {order.table}</h1>
          <button onClick={() => onModalVisible(false)}>
            <img src={closeIcon} alt="Fechar Modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>{icon}</span>
            <strong>{status}</strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => {
              return (
                <div key={_id} className="item">
                  <img
                    src={`http://localhost:3333/uploads/${product.imagePath}`}
                    alt={product.name}
                    title={product.name}
                  />
                  <span className="quantity">{quantity}x</span>
                  <div className="product-details">
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(Number(total))}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button className="primary">
            <span>🧑‍🍳</span>
            <span>Iniciar produção</span>
          </button>
          <button className="secondary">
            <span>Cancelar pedido</span>
          </button>
        </Actions>
      </ModalBody>
    </Container>
  )
}
