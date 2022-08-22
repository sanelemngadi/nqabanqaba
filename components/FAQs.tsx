import React from 'react';
import styled from 'styled-components';
import { Center, Container } from '../styles/CommonComponents';
import { FaCircle } from "react-icons/fa";

const Wrapper = styled.div`
    @media (min-width: 768px){
        margin-top: 64px;
    }
`

const Content = styled(Container)`
    
`

const Heading = styled.div`
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    
    @media (min-width: 768px){
        text-align: left;
        margin: 1rem 5rem;
        max-width: 576px;
        margin-bottom: 64px;
    }

    h1{
        color: #0E2536;
        font-size: 40px;
        font-weight: 900;
        line-height: 1;
        margin-bottom: 1rem;
        margin-top: 2.5rem;

        @media (min-width: 768px){
            margin-top: 5rem;
        }
    }
    p{
        font-size: 18px;
    }
`

const Question = styled.section`
    margin-top: 24px;
    max-width: 768px;
    
    @media (min-width: 576px){
        margin-left: 32px;
    }
    @media (min-width: 768px){
        margin-left: 128px;
    }

    label{ 
        display: flex;
    }
    
    h4{
        cursor: pointer;
        font-weight: normal;
        padding-left: 1rem;
        &:hover{
            color: #F6B47D;
        }
    }

    input{
        display: none;
        visibility: hidden;
        opacity: 0;
    }
    input:checked ~ article:first-of-type span{
        color: #F6B47D;
    }
    input:checked ~ article:last-of-type{
        display: block;
        transition: all 0.5s ease-in-out;
    }
    input:checked ~ article:first-of-type{
        h4{
            font-weight: bold;
        }
    }

    article:first-of-type{
        display: flex;
        cursor: pointer;

        span{
            display: inline-flex;
            border-radius: 50%;
            margin: 0 .5rem;
        }
    }
    article:last-of-type{
        padding: 1rem 1rem;
        display: none;
        transition: all 0.5s ease-in-out;
        background-color: #f8f8f8;
        margin-top: 1rem;
        p{
            font-size: 14px;

            @media (min-width: 768px){
                max-width: 600px;
                margin: 0 auto;
            }
        }
        
    }
`

const FAQs = () => {
    return (
        <Wrapper>
            <Content>
                <Heading>
                    <h1>Frequenty Asked Questions</h1>
                    <p>Just in case you had the same questions that has previously been asked.</p>
                </Heading>
                <Question>
                    <input type="radio" name="faqs" id="one" />
                    <article>
                        <label htmlFor='one'>
                            <span>
                                <FaCircle />
                            </span>
                            <h4>Hi, is it possible to get a room with 1 double bed for this price instead of Single beds?</h4>
                        </label>
                    </article>
                    <article>
                        <p>Nqabanqaba has carport as a main parking and garage as one of the parking options. But we only show our guest on their arrival. We also confirm during the guest booking if they requested parking.</p>
                    </article>
                    <div></div>
                </Question>
                <Question>
                    <input type="radio" name="faqs" id="two" />
                    <article>
                        <label htmlFor='two'>
                            <span>
                                <FaCircle />
                            </span>
                            <h4>Can I park there and where can I park my car?</h4>
                        </label>
                    </article>
                    <article>
                        <p>Nqabanqaba has carport as a main parking and garage as one of the parking options. But we only show our guest on their arrival. We also confirm during the guest booking if they requested parking.</p>
                    </article>
                    <div></div>
                </Question>
                <Question>
                    <input type="radio" name="faqs" id="three" />
                    <article>
                        <label htmlFor='three'>
                            <span>
                                <FaCircle />
                            </span>
                            <h4>how far is the airport from the place and is it waking distance to the sea?</h4>
                        </label>
                    </article>
                    <article>
                        <p>Nqabanqaba has carport as a main parking and garage as one of the parking options. But we only show our guest on their arrival. We also confirm during the guest booking if they requested parking.</p>
                    </article>
                    <div></div>
                </Question>

            </Content>
        </Wrapper>
    )
}

export default FAQs