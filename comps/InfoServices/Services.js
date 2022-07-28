import React from "react";
import {StyledDiv, Services1, StyledDiv1, Services2, StyledDiv2} from './Services.Styled'
import { Services3, StyledDiv3, Services4, StyledDiv4} from "./Services.Styled";
import Link from "next/link";



function Services() {
  return (
    <>
      <StyledDiv>
        სერვისები
      </StyledDiv>


     <StyledDiv1>
     < Services1/>
            <h1>საგადასახადო კონსულტაცია</h1>
            <h2>საგადასახადო დავის შემთხვევაში   გაგიწევთ პროფესიულ მომსახურებას და დავიცავთ თქვენს ინტერესებს.</h2>
            <Link href='/' passHref>
            <h3>გაიგეთ მეტი</h3>
            </Link>    
     </StyledDiv1>

     <StyledDiv2>
        <Services2 />
        <h1>აუდიტი</h1>
        <h2>მომსახურება მოიცავს ფინანსური აუდიტის ჩატარებას და კომპანიის საგადასახადო ანგარიშსწორების სისწორის შემოწმება.</h2>
        <h3>გაიგეთ მეტი</h3>
     </StyledDiv2>
        

        <StyledDiv3>
          <Services3 />
          <h1>ბუღალტრული მომსახურება</h1>
          <h2>გთავაზობთ კომპანიაში ფინანსური ანგარიშგების სტანდარტების დანერგვას და საბუღალტრო აღრიცხვის წარმოებას.</h2>
          <h3>გაიგეთ მეტი</h3>
        </StyledDiv3>
     
      <StyledDiv4>
        <Services4 />
        <h1>ქონების შეფასება</h1>
        <h2>მომსახურება მოიცავს უძრავი და მოძრავი ქონების შეფასებას და  ქონების საბაზრო ღირებულების დადგენას.</h2>
        <h3>გაიგეთ მეტი</h3>
      </StyledDiv4>

      </>
  )
}

export default Services