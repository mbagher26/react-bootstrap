import './App.css';
import { Container } from 'react-bootstrap';
import Menous from './components/menous/Menous';

function App() {
  return (
    <div className="App">
      <Container fluid style={{padding:0}}>
        <Menous/>
      </Container>
    </div>
  );
}

export default App;
