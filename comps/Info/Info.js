import React from 'react'
import {Div, StyledH1, StyledP, Light, List, Calculator} from './Info.styled'
import Image from 'next/image'

function Info() {
  return (
    <>
    <Div>
    </Div>

    <Light>
        <Image src={'/Lightbolt.png'} alt='' width={31.86} height={48}/>
    </Light>

    <List>
        <Image src={'/List.png'} alt='' width={48}  height={48}/>
    </List>

    <Calculator />

  

    <StyledH1>
        <h1 className='consultation'>პროფესიული კონსულტაცია</h1>
        <h1 className='audit-service'>აუდიტორული მომსახურება</h1>
        <h1 className='accountant-service'>ბუღალტრული მომსახურება</h1>
    </StyledH1> 
   
   <StyledP>
    <p className='content-1'>კონსულტაციის მიღება შესაძლებელია როგორც ადგილზე, ისე ონლაინ კომუნიკაციის საფუძველზე. </p>
    <p className='content-2'>Accept-ის აუდიტორები გაგიწევენ სრულყოფილ მომსახურება აუდიტის მიმართულებით.</p>
    <p className='content-3'>კომპანიის საბუღალტრო აღრიცხვის წარმოება და ფინანსური ანგარიშგების მომზადება IFRS, IFRS for SME სტანდარტების დაცვით.</p>
   </StyledP>
    </>
  )
}

export default Info