import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import { Row, Col, Tab }  from 'react-bootstrap';
import { Conocimiento, Cursos, Experiencia, Info } from './pages';


const sidebarElements = [{
  id: "info",
  nombre: "Informacion Personal",
  pagina: (<Info/>)
},
{
  id: "exp",
  nombre: "Experiencia Previa",
  pagina: (<Experiencia/>)
},
{
  id: "knowledge",
  nombre: "Conocimientos",
  pagina: (<Conocimiento/>)
},
{
  id: "courses",
  nombre: "Cursos Dictados",
  pagina: (<Cursos/>)
}];

function App() {
  const [element, setElement] = useState(sidebarElements[0])

  return (
    <Tab.Container defaultActiveKey="#info">
      <Row>
        <Col md="auto">
          <Sidebar elements={sidebarElements}/>
        </Col>
        <Col>
          <Tab.Content>
            {sidebarElements.map(element => 
              <Tab.Pane eventKey={"#" + element.id}>
                {element.pagina}
              </Tab.Pane>
            )}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default App;
