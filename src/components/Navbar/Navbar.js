import React from 'react'
import {Navbar,Container, NavbarBrand,Button} from 'react-bootstrap'

function Navbars() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <NavbarBrand><i>Instagram</i></NavbarBrand>
                <Button variant="light">Sign in</Button>
            </Container>
        </Navbar>
        
    )
}

export default Navbars
