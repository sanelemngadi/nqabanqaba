import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Center, Container } from '../styles/CommonComponents';
import { FaUmbrellaBeach, FaWolfPackBattalion } from "react-icons/fa";
import { MdGolfCourse } from "react-icons/md";

const Wrapper = styled.div`
    height: 70vh;
    max-height: 448px;
    position: relative;
    overflow: hidden;
    background-color: #0E2536;
    display: flex;
    align-items: center;

    @media (min-width: 576px){
        margin-top: 24px;
    }
    @media (min-width: 768px){
        margin-top: 48px;
    }
    @media (min-width: 992px){
        margin-top: 128px;
    }
    
    & > div{
        display: block;
        position: absolute;
        border-radius: 50%;
        background: linear-gradient(0deg,#0E2536,#F6B47D);
    }
    & > div:first-of-type{
        top: -2rem;
        left: -2rem;
        height: 128px;
        width: 128px;

        @media (min-width: 992px){
            height: 256px;
            width: 256px;
        }
    }
    & > div:last-of-type{
        bottom: -2rem;
        right: -2rem;
        height: 200px;
        width: 200px;

        @media (min-width: 992px){
            height: 400px;
            width: 400px;
        }
    }
`

const Content = styled.section`
    background-color: #f5f5f5;
    margin: 0rem auto;
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0;
    z-index: 5;

    @media (min-width: 992px){
        width: 100%;
    }
`

const Inner = styled(Container)`
    background-color: #f5f5f5;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "head"
    "icons";
    box-shadow: 4px 4px 8px 8px rgba(0,0,0,0.25);
    
    @media (min-width: 992px){
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "icons head";
    }
    
    div:first-of-type{
        grid-area: head;
        max-width: 372px;
        text-align: center;
        margin: .5rem auto;

        @media (min-width: 992px){
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    

        p{
            color: #585b5e;
        }
        h1{
            font-size: 32px;
            color: #0E2536;
            margin-top: 1rem;
        }

        @media (min-width: 996px){
            text-align: left;
            
            h1{
                font-size: 48px;
                margin-top: 0;
            }
        }
    }
    div:last-of-type{
        grid-area: icons;
        display: flex;
        align-items: center;

        article{
            flex: 1;
            text-align: center;
            padding: 1rem 0;
            margin: 0.3rem;

            @media (min-width: 992px){
                padding: 2rem 0;
            }
            &:hover{
                background-color: #ebebeb;
                border-radius: 4px;
            }

            span{
                font-size: 32px;
                color: #6B6B6B;
            }
            p{
                font-size: 12px;
            }
        }
    }
`
const Encampasses: FunctionComponent = () => {
    return (
        <Wrapper>
            <div></div>
            <div></div>
            <Content>
                <Inner>
                    <div>
                        <h1>What's Around?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                    </div>
                    <div>
                        <article>
                            <span><FaUmbrellaBeach /></span>
                            <p>Alkantstrand
                                Beach</p>
                        </article>
                        <article>
                            <span><FaWolfPackBattalion /></span>
                            <p>Game Reserves</p>
                        </article>
                        <article>
                            <span><MdGolfCourse /></span>
                            <p>Golf Clubs</p>
                        </article>
                    </div>
                </Inner>
            </Content>
        </Wrapper>
    )
}

export default Encampasses