import {Container,Card,CardGroup} from 'react-bootstrap';

function Cards({title1, dec1, title2, dec2,  title3, dec3}) {
  return (
    <Container>
      <CardGroup>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>{title1}</Card.Title>
          <Card.Text>
          {dec1}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 ago</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>{title2}</Card.Title>
          <Card.Text>
          {dec2}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 day ago</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>{title3}</Card.Title>
          <Card.Text>
          {dec3}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 day ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Container>
  )
}

export default Cards