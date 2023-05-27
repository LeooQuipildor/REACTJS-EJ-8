import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'
import { Container } from 'react-bootstrap'
function App() {

  return (
    <>
      <Container className='mainPage'>
        <h1 className='text-center display-1 text-light'>Formulario</h1>
        <hr className='text-light' />
        <div className='cardForm'>
        <Formulario></Formulario>
        </div>
      </Container>
      <footer className='bg-dark text-light py-4 text-center'>
        <p>&copy; Todos los Derechos Reservados</p>
      </footer>
    </>
  )
}

export default App