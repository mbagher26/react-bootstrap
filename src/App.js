import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Menous from './components/menous/Menous';
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
      <Container fluid style={{padding:0}}>
        <Menous />
        <Row>
          <Col><Home/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
