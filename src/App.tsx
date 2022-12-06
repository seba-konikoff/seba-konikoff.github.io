import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import { Row, Col, Tab, Image }  from 'react-bootstrap';
import { Conocimiento, Cursos, Experiencia, Info } from './pages';
import profilePic from './profilePic.jpg'

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
  return (
    <Tab.Container defaultActiveKey="#info">
      <Row>
        <Col md="auto">
          <div style={{display: "flex", justifyContent: "center"}}>
            <Image src={profilePic} roundedCircle fluid style={{width: "204px"}}/>
          </div>
          <Sidebar elements={sidebarElements}/>
        </Col>
        <Col>
          <Tab.Content>
            {sidebarElements.map(element => 
              <Tab.Pane eventKey={"#" + element.id} key={"#" + element.id}>
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
