import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import {
    Button, Center,
    Container, HeroHeading1,
    NavLink
} from '../styles/CommonComponents';


const Stripes = css`
    height: 40px;   
    width: 100%; 

    @media (min-width:768px) {
        height: 56px;
        width: 100%;
    }
`

const Wrapper = styled.div`
    color: #F6B47D;
    min-height: 100vh;
    background-image: url(/images/park.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;

    @media (min-width: 992px) {
        display: none;
        visibility: hidden;
        opacity: 0;
    }
`

const Header = styled.div`
    background-color: #0E2536;
    
    div{
        z-index: 100;
        ${Stripes}      
    }
    div:nth-of-type(2){
        nav{
            height: 100%
        }
        ul{
            ${Center};
            height: 100%;
            flex-wrap: wrap;

            li{
                height: 100%;
                list-style: none;

                a{
                    ${NavLink};
                }
                a:hover{
                    color:#c0c0c0;
                }
            }
        }     
    }
    div:nth-of-type(3){
        background: linear-gradient(90deg, #F6B47D, #0E2536);
        color: #1A3300;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 12px;
        padding-left: 1rem;
    }
`

const Hero = styled.div<{ breakpoint: "lg" | "sm" }>`
    min-height: calc(100vh - (40px * 3));
    background-color: rgba(0,0,0,.5);
    padding-bottom: 1rem;
    display: flex;
    align-items: center;

    section{
        width: 95%;
        margin: 0 auto;

        h1{
            ${HeroHeading1};
        }
        p{
            font-size: 18px;
            text-align: center;
            color: #c0c0c0;
            max-width: 576px;
            
            @media (min-width: 768px) {
                text-align: left;
            }
        }

        article{
            ${Center}
            width: 100%;//
            max-height: 256px;//
            flex-direction: column;
            padding: .5rem;//
            border-radius: 16px;//
            
            @media (min-width: 768px) {
                align-items: flex-start;
            }
            
            button{
                ${Button};

                @media (min-width: 768px) {
                    width: 50%;
                }

                &:hover{
                    background-color:#0E2536;
                    color: #F6B47D;
                }
            }
        }
    }
`

const Section = styled(Container)``


const SmallHero: FunctionComponent = () => {
    return (
        <Wrapper>
            <Header>
                <div></div>
                <div>
                    <nav>
                        <ul>
                            <li><Link href="#"><a>Home</a></Link></li>
                            <li><Link href="#"><a>About</a></Link></li>
                            <li><Link href="#"><a>Contact</a></Link></li>
                            <li><Link href="#"><a>FAQs</a></Link></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <span>Home</span>
                </div>
            </Header>
            <Hero breakpoint='sm'>
                <Section as="section">
                    <h1>Welcome to Nqabanqaba BnB</h1>
                    <article>
                        <p>Nqabanqaba is one of the top BnBs in Richards Bay that offer ensuit bedrooms for anyone.</p>
                        <button>Book Now</button>
                    </article>
                </Section>
            </Hero>
        </Wrapper>
    )
}

export default SmallHero;