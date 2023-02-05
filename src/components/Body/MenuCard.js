import React from 'react'
import {Button,Card} from "react-bootstrap"

 function MenuCard({menuCards}) {
  return (<>
    {menuCards.map((value, index) => {
        return <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={menuCards[index].foodImage} height="250px" />
            <Card.Body>
                <Card.Title>{menuCards[index].itemName}</Card.Title>
                <Card.Text style={{ height: "40px" }}>{menuCards[index].description}</Card.Text>
                <Card.Text>{menuCards[index].price} USDT</Card.Text>
                <Button variant="primary">Add to card</Button>
            </Card.Body>
        </Card>
    })}
</>)
}

export default MenuCard
