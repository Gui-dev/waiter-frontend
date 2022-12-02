import { Container, Content } from './style'

import logo from './../../assets/images/logo.svg'

export const Header = () => {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>
        <img src={logo} alt="Imagem de uma garçonete e um garçom" />
      </Content>
    </Container>
  )
}
