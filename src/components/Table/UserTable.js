import React from 'react'
import {Table,Container} from 'react-bootstrap';

function UserTable({userDetails,heading,color}) {
    // console.log(userDetails)
  return (
    <Container >
      <h1>{heading}</h1>
        <Table style={{color:color}}>
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
        {userDetails.map((value,index)=>{
            return <tr>
            <td>{index+1}</td>
            <td>{value.firstName}</td>
            <td>{value.lastName}</td>
            <td>{value.location}</td>
            <td>{value.age}</td>
          </tr>
        })}
      </tbody>
    </Table>
    </Container>
  )
}

export default UserTable