import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

function App() {

  return (
    <BrowserRouter>
      <Header title='Core' />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
