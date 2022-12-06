import { OrderProps, OrdersBoard } from '../OrdersBoard'
import { Container } from './style'

const orders: OrderProps[] = [{
  _id: '6386fe1fb8a4daf56d104631',
  table: '123',
  status: 'WAITING',
  products: [
    {
      _id: '6386fe1fb8a4daf56d104632',
      quantity: 3,
      product: {
        name: 'Pizza Quatro Queijos',
        imagePath: '1669705968093&quatro-queijos.png',
        price: 40
      }
    },
    {
      _id: '6386fe1fb8a4daf56d104633',
      quantity: 4,
      product: {
        name: 'Coca Cola',
        imagePath: '1669704632869&coca-cola.png',
        price: 7
      }
    }
  ]
}]

export const Orders = () => {
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  )
}
