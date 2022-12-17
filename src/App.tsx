import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Header } from './components/Header'
import { Orders } from './components/Orders'
import { GlobalStyle } from './styles/global'

function App () {
  return (
    <>
      <GlobalStyle />
      <ToastContainer position="bottom-center" bodyStyle={{ fontSize: 18, fontWeight: 'bold' }} />
      <Header />
      <Orders />
    </>
  )
}

export default App
