import React from 'react'
import { Container,Table } from 'react-bootstrap'

function UserStaticTable({userDetails}) {
    // console.log(userDetails)
  return (
    <Container>
        <h1>UserStaticTable</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
      <tr>
            <td>1</td>
            <td>{userDetails[0].firstName}</td>
            <td>{userDetails[0].lastName}</td>
            <td>{userDetails[0].location}</td>
            <td>{userDetails[0].age}</td>
    </tr>
    <tr>
            <td>2</td>
            <td>{userDetails[1].firstName}</td>
            <td>{userDetails[1].lastName}</td>
            <td>{userDetails[1].location}</td>
            <td>{userDetails[1].age}</td>
    </tr>
    <tr>
            <td>1</td>
            <td>{userDetails[2].firstName}</td>
            <td>{userDetails[2].lastName}</td>
            <td>{userDetails[2].location}</td>
            <td>{userDetails[2].age}</td>
    </tr>
      </tbody>
    </Table>
    </Container>
  )
}

export default UserStaticTable