import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';
import {
    Button, Container,
    HeroHeading1, NavLink
} from '../styles/CommonComponents';

const Cover = css`
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    display: none;
    visibility: hidden;
    opacity: 0;
    
    @media (min-width: 992px){
        display: block;
        visibility: visible;
        opacity: 1;

        background: linear-gradient(90deg, #F6B47D 40%, #0E2536 70%);
    }
`

const Deco = styled.div`
    height: calc(56px + 48px);
    width: 100%;
    background: linear-gradient(90deg, #F6B47D, #0E2536 80%);
`

const Hero = styled.div`
    height: 70vh;
`

const Content = styled(Container)`
    display: flex;
    height: 100%;

    div{
        flex: 1;
    }

    div:first-of-type{
        background-color: #F6B47D;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    div:last-of-type{
        background-image: url(/images/park.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;

        nav{
            ${Cover}
            background-color: rgba(0,0,0,.5);
        }
        
        ul{
            ${Cover}
            display: flex;
            flex-direction: column;

            li{
                flex: 1;
                list-style: none;

                a{
                    ${Cover};
                    ${NavLink};
                    text-decoration: none;
                    font-weight: bold;
                }

                a:hover{
                    background: linear-gradient(90deg, #F6B47D, #0E2536 80%);
                }
            }
            li:nth-of-type(3){
                background: linear-gradient(90deg, #F6B47D, #0E2536 80%);
            }

            li:last-of-type{
                background: linear-gradient(90deg, #F6B47D, transparent 80%);
            }
        }
    }
`

const Section = styled.div<{ breakpoint: "lg" | "sm" }>`
    h1{
        ${HeroHeading1};
        font-size: 48px !important;

        span{
            color: #fff;
        }
    }
    p{
        font-size: 18px;
        color: #0E2536;
        max-width: 500px;
        text-align: left;
    }

    article{
        width: 100%;//
        max-height: 256px;//
        display: flex;
        flex-direction: column;//
        align-items: flex-start;
        justify-content: center;
        padding: .5rem;//
        border-radius: 16px;//
        
        button{
            ${Button};
        }
    }
`

const SecDeco = styled.div`
    height: 128px;
    display: flex;
    flex-direction: column;
    background-color: #0E2536;

    section{
        display: block;
        height: 100%;
        width: 100%;
    }
    section:first-of-type{
        display: flex;
        flex: 1;
        div{
            height: 100%;
            width: 100%;
        }
        
        div:first-of-type{
            background-color: #F6B47D;
            clip-path: polygon(0 0, 100% 0, 100% 0, 90% 100%, 20% 100%, 0 100%, 0% 20%);
        }
    }
    section:last-of-type{
        flex: 1;
    }
`

const LargeHero = () => {
    return (
        <Wrapper>
            <Deco />
            <Hero>
                <Content>
                    <div>
                        <Section as="section" breakpoint='lg'>
                            <h1>Welcome to Nqabanqaba <span>BnB</span></h1>
                            <article>
                                <p>Nqabanqaba is one of the top BnBs in Richards Bay that offer ensuit bedrooms for anyone.</p>
                                <button>Book Now</button>
                            </article>
                        </Section>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li></li>
                                <li></li>
                                <li><Link href="#"><a>Home</a></Link></li>
                                <li><Link href="#"><a>About Us</a></Link></li>
                                <li><Link href="#"><a>Contact Us</a></Link></li>
                                <li><Link href="#"><a>Frequently Asked Questions</a></Link></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </nav>
                    </div>
                </Content>
            </Hero>
            <SecDeco>
                <section>
                    <div></div>
                    <div></div>
                </section>
                <section></section>
            </SecDeco>
        </Wrapper>
    )
}

export default LargeHero