import { ListGroup, ListGroupItem, Container, Button } from 'reactstrap';




const itemsList = ( ) => {


    const {items} = item
  return (
    <Container>
        <Button color="dark">primary</Button>
      <ListGroup>
        <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
      </ListGroup>
    </Container>
  );
}

export default itemsList;