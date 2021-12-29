import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import logo from '../images/skladany.png'
import { menuData } from '../data/Data'
import { FaTimes } from 'react-icons/fa'

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: brown;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const CloseIcon = styled(FaTimes)`
    color: #242424;
`

const DropdownWrapper = styled.div`
`

const Obrazok = styled.img`
    height: 50px;
`

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);
    }
`

const DropdownLink = styled(Link)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        color: #242424;
    }
`

const Logo = styled(Link)`
    ${DropdownLink}
    font-style: italic;
    cursor: pointer;
    font-size: 1.5rem;
`

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                <Logo smooth onClick={toggle} to='/'>
                    <Obrazok src={logo} alt='logo' />
                </Logo>
                    {/* {menuData.map((item, index) => (
                        <DropdownLink smooth to={item.link} key={index} onClick={toggle}>
                            {item.title}
                        </DropdownLink>
                    ))} */}
                    <DropdownLink  smooth to='/kontakt' onClick={toggle}>
                        Kontakt
                    </DropdownLink>
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown