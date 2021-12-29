import React from 'react'
import styled from 'styled-components'

const Pata = styled.div`
    background-color: #242424;
    padding: 10px;
`

const Meno = styled.h3`
    text-align: center;
    padding: 10px;
    color: #dcdcdc;
`

const Footer = () => {
    return (
        <Pata>
            <Meno>skladany.sk {new Date().getFullYear()}</Meno>
        </Pata>
    )
}

export default Footer
