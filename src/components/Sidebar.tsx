import ListGroup from 'react-bootstrap/ListGroup';

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
      <a>
        Curriculum Vitae de Sebastian Konikoff
      </a>
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