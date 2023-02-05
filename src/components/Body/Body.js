import React from 'react'
import { Container } from 'react-bootstrap'
import UserTable from '../Table/UserTable'
import UserStaticTable from "../Table/UserStaticTable"
import Cards from './Cards'
// import "./Card.css"
import style from "./Card.module.css"
import MenuCard from './MenuCard'

function Body() {

  const {car} = style

  const RagisteruserData = [
    { firstName: "junaid", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    { firstName: "khizer", lastName: "mohammad", location: "hyderabad", age: 35 },
    { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
    { firstName: "sohail", lastName: "qazi", location: "hyderabad", age: 32 },
    { firstName: "mubeen", lastName: "uddin", location: "hyderabad", age: 36 },
    { firstName: "inayat", lastName: "khan", location: "hyderabad", age: 24 },
  ];
  
  const UnRagisteruserData = [
    { firstName: "adnan", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "faizan", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    { firstName: "khizer", lastName: "mohammad", location: "hyderabad", age: 35 },
    { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
    { firstName: "sohail", lastName: "qazi", location: "hyderabad", age: 32 },
    { firstName: "mubeen", lastName: "uddin", location: "hyderabad", age: 36 },
    { firstName: "inayat", lastName: "khan", location: "hyderabad", age: 24 },
  ];

  const menuCards = [
    {
      itemName: "Caesar's Salad",
      description: "The original Caesar's Salad recipe",
      foodImage: 'https://bit.ly/2GJFu5W&#39;',
      price: 12,
      isFavorite: false,
    },
    {
      itemName: 'Spaghetti Carbonara',
      description: "Better than your nonna's! All local and fresh ingredients",
      foodImage: 'https://bit.ly/2GBnz1n&#39;',
      price: 15,
      isFavorite: false,
    },
    {
      itemName: 'Grilled Whole Fish',
      description: 'Fish of the day, grilled whole with a side of vegetables',
      foodImage: 'https://bit.ly/3d6iKsJ&#39;',
      price: 20,
      isFavorite: false,
    },
    {
      itemName: 'Steak Florentine',
      description: 'Meat!',
      foodImage: 'https://bit.ly/3ddiSH1&#39;',
      price: 30,
      isFavorite: false,
    },
  ]



  return (
    <Container>
      <br/>
      <div className={car}>
      <Cards props= "Nanded"/>
      <Cards props= "Hyderabad"/>
      <Cards props= "Mumbai"/>
      <Cards props= "Aurangabad"/>
      </div>
      <br/>
      <UserStaticTable userDetails={RagisteruserData}/>
      <br/>
      <UserTable userDetails={RagisteruserData} heading="Ragister User Data" color="green"/>
      <br/>
      <UserTable userDetails={UnRagisteruserData} heading="Unragister User Data" color="red"/>
      <br/>
      <div className="d-flex justify-content-sm-between">
      <MenuCard menuCards={menuCards}/>
      </div>
      <br/>
    </Container>
  )
}

export default Body