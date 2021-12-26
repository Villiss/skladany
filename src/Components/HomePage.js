import React, {useState, useRef, useEffect} from 'react'
import styled, { css } from 'styled-components/macro'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack, IoImage } from 'react-icons/io5'

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg, rgba(0,0,0,0.4) 0%, 
            rgba(0,0,0,0.4) 50%, 
            rgba(0,0,0,0.8) 100%)
    }
`

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter:  ${props => props.blurry ? 'blur(5px)' : 'blur(0px)'};
    transition: 0.5s ease-in-out;
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    text-align: center;
    flex-direction: column;
    width: calc(100% - 300px);
    color: #fff;
    padding: 20px;
    border: 3px solid #f1f1f1;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.4);
    h1{
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: center;
        margin-bottom: 0.8rem;
    }
    p{
        margin-bottom: 1.1rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
    @media screen and (max-width: 768px){
        h1, p{
            text-align: center;
        }
        width: auto;
    }
`

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

const arrowButtons = css`
    width:50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s ease-in-out;
    &:hover {
        background: brown;
        transform: scale(1.05);
    }
`

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons};
`

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons};
`
const Modal = styled(IoImage)`
    ${arrowButtons};
`

const HomePage = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)
    const [display, setDisplay] = useState('block')
    const [blureffect, setBlureffect] = useState(true)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length-1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 10000)

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const seeGallery = () => {
       setDisplay(display === 'block' ? 'none' : 'block')
       setBlureffect(blureffect ? false : true)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <HeroSection name='/'>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                <HeroImage blurry={blureffect} src={slide.image} alt={slide.alt}/>
                                <HeroContent style={{display: `${display}`}}>
                                    <h1>{(slide.title).toUpperCase()}</h1>
                                    {/* <p>{slide.desc}</p> */}
                                </HeroContent>                            
                            </HeroSlider>
                            )}
                            
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <Modal onClick={seeGallery}/>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default HomePage