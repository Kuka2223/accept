import React from 'react'
import Link from 'next/link'
import {StyledDiv, Logo} from './Navbar.styled'


function Navbar() {
  return (
    <>
   
    
    <Logo>
      Accept
    </Logo>
  

    <StyledDiv>
    <Link href='/' passHref>
      <a className='main'>მთავარი</a>
    </Link>

    <Link href='/services' passHref>
    <a className='services'>სერვისები</a>
    </Link>
      
    <Link href='about-us' passHref>
      <a className='about-us'>ჩვენს შესახებ</a>
    </Link>

    <Link href='/contacts' passHref>
      <a className='contacts'>კონტაქტი</a>
    </Link>

    </StyledDiv>
    </>
  )
}

export default Navbar