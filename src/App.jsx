import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';

function App() {
  return (
    <>
      <Container className='my-5 main'>
        <Titulo></Titulo>
        <hr />
        <Formulario></Formulario>
      </Container>
      <footer className='text-center bg-dark py-4 text-light'>
        <p> &copy; Todos los derechos reservados </p>
      </footer>
    </>
  )
}

export default App
