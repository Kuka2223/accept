import React from 'react'
import Footer from '../comps/Footer'


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Accept</Footer.Title>
                    <Footer.Link href="#">გამოცდილება</Footer.Link>
                    <Footer.Link href="#">გუნდი</Footer.Link>
                    <Footer.Link href="#">პროქეტები</Footer.Link>
                    <Footer.Link href="#">ხშირად დასმული კითხვები</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>სერვისები</Footer.Title>
                    <Footer.Link href="#">კონსულტაცია</Footer.Link>
                    <Footer.Link href="#">აუდიტი</Footer.Link>
                    <Footer.Link href="#">ბუღალტერია</Footer.Link>
                    <Footer.Link href="#">ქონების შეფასება</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>საკონტაქტო ინფორმაცია</Footer.Title>
                    <Footer.Link href="#">მისამართი:<br />თბილისი, ჭაბუა ამირეჯიბის გზატკეცილი 6, საოფისე სართული 2, 4ა</Footer.Link>
                    <Footer.Link href="#">Email: <br/>acceptaudit@gmail.com</Footer.Link>
                    <Footer.Link href="#">ტელეფონი: <br /> +(995) 599 27 29 14</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>სასარგებლო ბმულები</Footer.Title>
                    <Footer.Link href="#">შემოსავლების სამსახური</Footer.Link>
                    <Footer.Link href="#">პროფესიონალ ბუღალტერთა და აუდიტორთა ასოციაცია </Footer.Link>
                    <Footer.Link href="#">ბუღალტრული აღრიცხვის, ანგარიშგებისა და ზედამხედველობის სამსახური</Footer.Link>
                </Footer.Column>
              
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}