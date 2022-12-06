import { ListGroup } from 'react-bootstrap';

interface SidebarElement {
  nombre: string
  id: string
}

interface SidebarProps {
  elements: SidebarElement[]
}

function Sidebar({ elements }: SidebarProps)  {
  return (
    <div>
      <p>
        Curriculum Vitae de Sebastian Konikoff
      </p>
      <ListGroup variant="flush" as="ul">
        {elements.map(element =>
            <ListGroup.Item 
              key={element.id}
              action
              href={"#" + element.id}>
              {element.nombre}
            </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

export default Sidebar;