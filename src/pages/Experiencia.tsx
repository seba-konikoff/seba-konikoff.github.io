import { Accordion } from 'react-bootstrap';

const experiencias = [{
  id: "0",
  empresa: "Kavak SA",
  mesDesde: "Febrero 2022",
  mesHasta: "Noviembre 2022",
  puesto: "Desarrollador Senior Backend",
  proyectos: [
    {
      nombre: "Auto Equity"
    }
  ]
},
{
  id: "1",
  empresa: "Grupo Esfera SA",
  mesDesde: "Febrero 2018",
  mesHasta: "Enero 2022",
  puesto: "Desarrollador Senior Full Stack",
  proyectos: [
    
  ]
},
{
  id: "2",
  empresa: "Cognisys SRL",
  mesDesde: "Mayo 2012",
  mesHasta: "Enero 2018",
  puesto: "Desarrollador Semisenior Java",
  proyectos: [
    
  ]
}]

function Experiencia() {
  return (
  <div>
    <Accordion alwaysOpen>
    {experiencias.map(experiencia =>
      <Accordion.Item eventKey={experiencia.id} key={experiencia.id} >
        <Accordion.Header>{experiencia.empresa} / {experiencia.mesDesde} - {experiencia.mesHasta} / {experiencia.puesto}</Accordion.Header>
        <Accordion.Body>
          prueba
        </Accordion.Body>
      </Accordion.Item>
      )}
    </Accordion>
  </div>
  )
}

export default Experiencia;