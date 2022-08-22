import React from 'react';
import styled from 'styled-components';
import { Center, Container } from '../styles/CommonComponents';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const Wrapper = styled.div`
    padding-bottom: 64px;
`
const PricingSlider = styled(Container)`
    position: relative;

    button{
        background-color: black;
        position: absolute;
        right: 0;
        bottom: 0;
        &:hover{
            background-color: black;
        }
    }
    button:first-of-type{
        right: 0;
    }
    button:last-of-type{
        left: 0;
    }
    /* width: 100%;
    height: 100%; */
    div:first-of-type{
        /* background-color: blue; */
        /* display: flex; */
        /* overflow: hidden; */

        border-radius: 16px;
        & > div{
            /* border: 1px solid black; */
            /* background-color: #c0c0c0; */
            /* height: 380px; */
            & > div{
                /* margin: 2rem; */
                /* height: 380px; */
                /* width: 380px !important; */
                /* width: 100%; */
                
                /* ${Center} */
                /* border-radius: 16px; */
                /* border: 1px solid blue; */
                /* & > div{
                    & > div{
                        background-color: black;
                        border-radius: 16px;
                        margin: 0 .5rem !important;
                    }
                } */
                
                

            }
        }
    }
`

const Heading = styled.div`
    width: 100%;
    margin-top: 56px;
    margin-bottom: 32px;
    h1{
        text-align: center;
    }

    @media (min-width: 768px){
        margin-top: 64px;
        margin-bottom: 48px;

        h1{
            font-size: 48px;
        }
    }
    @media (min-width: 992px){
        margin-top: 96px;
        margin-bottom: 64px;
    }
`

const Item = styled.div`
    padding: 0 1rem;
    img{
        object-fit:cover;
        border-radius: 16px;
        /* padding: 0 .5rem !important; */
    }
`

const Services = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Wrapper>
            <PricingSlider>
                <Heading>
                    <h1>Choose your stay</h1>
                </Heading>
                <Slider {...settings}>
                    <Item>
                        {/* <h3>1</h3> */}
                        <Image src="/images/couple-bed1.jpg" width={"380.67px"} height="380.67" alt="couples bed" />
                    </Item>
                    <Item>
                        {/* <h3>2</h3> */}
                        <Image src="/images/image-pool.jpg" width={"380.67px"} height="380.67" alt="swimming pool" />
                    </Item>
                    <Item>
                        {/* <h3>3</h3> */}
                        <Image src="/images/park.jpg" width={"380.67px"} height="380.67" alt="chilus park" />
                    </Item>
                    <Item>
                        {/* <h3>1</h3> */}
                        <Image src="/images/couple-bed1.jpg" width={"380.67px"} height="380.67" alt="couples bed" />
                    </Item>
                    <Item>
                        {/* <h3>2</h3> */}
                        <Image src="/images/image-pool.jpg" width={"380.67px"} height="380.67" alt="swimming pool" />
                    </Item>
                    <Item>
                        {/* <h3>3</h3> */}
                        <Image src="/images/park.jpg" width={"380.67px"} height="380.67" alt="chilus park" />
                    </Item>
                </Slider>
            </PricingSlider>

        </Wrapper>
    )
}

export default Services