import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Center, Container } from '../styles/CommonComponents';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";

const Wrapper = styled.div`
    background: linear-gradient(90deg,#fff, #DEE7ED);
    padding-bottom: 32px;
`

const Content = styled(Container)`
    overflow: hidden;
    padding: 1rem;
`

const Heading = styled.div`
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    
    @media (min-width: 768px){
        text-align: left;
        margin: 1rem 5rem;
        max-width: 576px;
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
    button{
        ${Button}
        width: 90%;
        margin-bottom: 1rem;
        transition: all 0.5s ease-in-out;

        &:hover{
            background: linear-gradient(90deg, #fff 0.05%,#F6B47D 80%,#e4e3e3);
            transition: all 0.5s ease-in-out;
        }
    }
`

const Reviews = styled.div<{ move: number, len: number }>`
    height: 256px;
    background: linear-gradient(90deg,#e4e3e3, #DEE7ED);
    border-radius: 1rem;
    overflow: hidden;
    margin-top: 1rem;
    padding-top: 8px;
    padding-left: 8px;

    @media (min-width: 768px){
        margin: 1rem 5rem;
        margin-top: 3rem;
    }
    
    & > div {
        overflow: hidden;
        height: 100%;
        min-height: 200px;
        background: linear-gradient(90deg,#fff, #DEE7ED);
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;

        & > div{
            height: 100%;
            display: flex;
            align-items: center;
            width: 300%;
        
            section{
                padding: 1rem;
                flex-basis: 100%;
                height: 100%;
                min-height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 1rem;
            
                @media (min-width: 768px){
                    min-height: 256px;
                    padding-left: 96px;      
                }
                @media (min-width: 992px){
                    min-height: 296px;
                    padding-left: 128px;      
                }
            
                span{
                    font-size: 32px;
                    color: #e4e3e3;
                }
            
                p,h4 {
                    max-width: 576px;
                    line-height: 1.5;
                }
                p{
                    height: 144px;

                    @media (min-width: 768px){
                        height: auto;
                    }
                }
                
                h4{
                    margin-top: 1rem;
                    ${Center};
                    justify-content: flex-start;
                
                    span{
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 48px;
                        height: 48px;
                        border-radius: 25%;
                        margin-right: 1rem;
                        background-color: #e4e3e3;
                        color: #F6B47D;
                    }
                }
            }

    }
}
`

const Controls = styled(Container) <{ leftState: boolean, rightState: boolean }>`
    display: none;

    button{
        width: 40px;
        height: 40px;
        margin-left: .5rem;
        ${Center};
        cursor: pointer;
    }

    button:first-of-type{
        cursor: ${({ leftState }) => leftState ? "not-allowed" : "pointer"};
    }
    button:last-of-type{
        cursor: ${({ rightState }) => rightState ? "not-allowed" : "pointer"};
    }

    @media (min-width: 768px){
        display: flex;
        justify-content: flex-end;
        padding-right: 128px;
    }
`

const Indicators = styled.div<{ current: number }>`
    display: flex;
    justify-content: center;

    span{
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 1px solid black;
        border-radius: 50%;
        margin: 1rem .3rem;
        cursor: pointer;


        &:hover{
            background-color: black;
        }
    }

    span:nth-of-type(${({ current }) => (current + 1) < 0 && 1}){
        background-color: black;
    }
    span:nth-of-type(${({ current }) => current + 1}){
        background-color: black;
    }
`

interface Rev {
    name: string,
    img: string,
    msg: string
}
const reviews: Rev[] = [
    {
        name: "Dr",
        img: "11",
        msg: "Our rooms were clean and comfortable. The owner was helpful and we were able to use the kitchen to heat our food.",
    },
    {
        name: "Sphiwe",
        img: "22",
        msg: "I liked everything the rooms were clean the stuff was very friendly i even borrowed a charger frm a stuff member and he gave it to me without any complains",
    },
    {
        name: "Lihle",
        img: "33",
        msg: "Everything🥺. The staff was friendly, it was sooo clean and beautiful. We had a very comfortable stay👌. The pictures don’t do justice for this place",
    },
    {
        name: "Nomvuselelo",
        img: "44",
        msg: "The host was very good,made sure everything is fine always checking on us and helpful",
    },
    {
        name: "Nomvuselelo",
        img: "55",
        msg: "The host was very good,made sure everything is fine always checking on us and helpful",
    },
    {
        name: "Nomvuselelo",
        img: "66",
        msg: "The host was very good,made sure everything is fine always checking on us and helpful",
    },
];



const Testimonials: FunctionComponent = () => {
    const [move, setMove] = useState<number>(0);
    const [rightControlState, setRightControlState] = useState<boolean>(false);
    const [leftControlState, setLeftControlState] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [prev, setPrev] = useState<number>(0);
    const [next, setNext] = useState<number>(0);
    const [items, setItems] = useState<Rev[]>([]);
    const len = reviews.length;

    // const curr = Math.floor(move / space);



    const increment = (): void => {
        // const rightLimit = (space * (len - 1));
        // if (move < rightLimit) {
        //     setMove(x => x + space);
        // }

        // if (move >= rightLimit) {
        //     setRightControlState(true);
        // }
        //Prev:{count > 0 ? count - 1 : null} current: {count} next: {count < len - 1 ? count + 1 : null}



        if (count < len - 1) {
            setCount(x => x + 1);
            // console.log("img: ", reviews[count].img);
        };

        setMove(x => x < 99 ? x + 33.33333 : 0);

        console.log("move: ", move);



    }
    const decrement = (): void => {
        // if (Math.floor(move) >= Math.floor(space)) {
        //     setMove(x => (x - space) < 0 ? 0 : x - space);
        // }
        if (count >= 1) {
            setCount(x => x - 1);
            // console.log("img: ", reviews[count].img);
        }

        setMove(x => x < 33 ? x - 33.33333 : 0);

        // console.log("count: ", count);


    }

    let initialPosition: number = 0;
    let moving = false;

    const gestureStart = (e: React.TouchEvent<HTMLDivElement>) => {
        initialPosition = e.touches[0].pageX;
        moving = true;
        console.log("touched ", e.touches[0].pageX);
    }

    const gestureMove = (e: React.TouchEvent<HTMLDivElement>): void => {
        if (moving) {
            const currentPosition = e.touches[0].pageX;
            const diff = currentPosition - initialPosition;

            console.log("different ", diff);
            if (diff > 50) {
                decrement();
            }

            if (diff < - 50) {
                increment();
            }
        }
    }
    const gestureEnd = (e: React.TouchEvent<HTMLDivElement>): void => {
        // const me = e.touches[0].pageX;
        moving = false;
    }


    useEffect(() => {
        // console.log("prev: ", prev, " curr: ", count, " next ", next);
        if (count > 0) {
            setPrev(count - 1);
        } else {
            setPrev(len - 1);
        }

        if (count < len - 1) {
            setNext(count + 1)
        } else {
            setNext(0);
        };

        // setItems([reviews[prev], reviews[count], reviews[next]]);

    }, [count, len, reviews, setItems, setPrev, setNext]);

    useEffect(() => {
        // console.log("prev: ", prev, " curr: ", count, " next ", next);

        setItems([reviews[prev], reviews[count], reviews[next]]);

        if (prev === len - 1) {
            setLeftControlState(true);
        } else {
            setLeftControlState(false);
        }
        if (next === 0) {
            setRightControlState(true);
        } else {
            setRightControlState(false);
        }

    }, [prev, count, next, reviews, setItems]);

    // console.log("img: ", items);




    // console.log(move);

    return (
        <Wrapper>
            <Content>
                <Heading breakpoint='sm'>
                    <h1>What our guest says about Us!</h1>
                    <p>We really love the feedback we get from our guests, it motivates us to keep going and improve on our services.</p>
                    <button>More Reviews</button>

                </Heading>
                <Reviews move={move} len={len}>
                    <div>
                        <div className="track"
                            onTouchStart={gestureStart}
                            onTouchMove={gestureMove}
                            onTouchEnd={gestureEnd}
                        >
                            {items.length > 0 && items.map((item, index) => {
                                return (
                                    <section key={"review-" + index}>
                                        <span><FaQuoteRight /></span>
                                        <p>{item.msg}</p>
                                        <h4><span>{item.name.charAt(0).toUpperCase()}</span> {item.name}</h4>
                                    </section>
                                )
                            })}
                        </div>
                    </div>
                </Reviews>
                <br />
                {/* <p>Prev:{prev} current: {count} next: {next}</p> */}
                <Indicators current={count}>
                    {reviews.map((item, index) => <span key={"item-" + index} onClick={() => setCount(index)}></span>)}
                </Indicators>
                <Controls leftState={leftControlState} rightState={rightControlState}>
                    <button onClick={decrement} disabled={leftControlState}><FaArrowLeft /></button>
                    <button onClick={increment} disabled={rightControlState}><FaArrowRight /></button>

                </Controls>

            </Content>
        </Wrapper >
    )
}

export default Testimonials