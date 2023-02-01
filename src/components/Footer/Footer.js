import React from 'react'
import { Container , Card  , Button} from 'react-bootstrap'

function Footer() {
  return (
    <Container>
      <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>best vacation place Bali</Card.Title>
        <Card.Text>
        The best months for a classic Bali beach vacation are May, June, July, August, and September — August is the driest month on the island. These are also the best months for snorkeling and diving, as rain limits visibility below the water's surface and sunshine enhances the underwater experience.
        </Card.Text>
        <Button variant="primary">Book now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">1 day ago</Card.Footer>
    </Card>
    </Container>
  )
}

export default Footer