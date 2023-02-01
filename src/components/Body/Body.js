import React from 'react'
import { Container } from 'react-bootstrap'
import Cards from './Cards'

function Body() {

  const title1 = "Nanded"

  const title2 = "Hyderabad"

  const title3 = "Mumbai"

  const dec1 = "Nanded is a city in Maharashtra state, India. It is the tenth largest city in the state and the seventy-ninth most populous city in India. It is the second largest city in Marathwada region. It is the district headquarters of Nanded district."

  const dec2 = "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital."

  const dec3 = "Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924."

  return (
    <Container>
      <br/>
      <Cards 
      title1 = {title1}
      dec1={dec1}
      title2={title2}
      dec2={dec2}
      title3 = {title3} 
      dec3={dec3}
      />
      <br/>
    </Container>
  )
}

export default Body