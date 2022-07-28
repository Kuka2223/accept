import React from 'react'
import {Rect, Input, Input1, Input2, Input3, Button} from './Contact.styled'
function Contact() {
  return (
    <>
    <Rect> 
       <p className='contact-us'>დაგვიკავშირდით</p>

       <form>
             <Input />
        </form>

    <form>
        <Input1 />
    </form>

    <form>
        <Input2 />
    </form>

    <form>
        <Input3 />
    </form>

    <Button>გაგზავნა</Button>

    </Rect>
    
    
    </>
  )
}

export default Contact