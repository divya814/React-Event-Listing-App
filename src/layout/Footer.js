import React from 'react'
import {Container} from "reactstrap"

export default function Footer() {
    return (
        <Container style={{background: "linear-gradient(to right, #538FFB, #5737D6)" }} fluid tag="footer" className="text-center mt-4 bg-info text-white text-uppercase position-absolute bottom-0 p-3">
            Developed by Divya Maheshwari
        </Container>
    )
}
