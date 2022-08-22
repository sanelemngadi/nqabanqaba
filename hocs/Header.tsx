import Image from 'next/image';
import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/CommonComponents';

const Wrapper = styled.div<{ onMenu: boolean }>`
    position: fixed;
    top: 0;
    width: 100%;
    /* border: 1px solid black; */
    z-index: 999;
    overflow: hidden;
    /* background-color: transparent; */
    background-color: #fff;
`

const HeaderStyled = styled(Container)`
    height: 40px;
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

    div:first-of-type{
        display: flex;
        align-items: center;
        @media (min-width: 576px){
            img{
                width: 126px !important;
            }
        }
    }
    @media (min-width: 768px){
        height: 56px;
    }

`

const Menu = styled.div<{ onMenu: boolean }>`
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 24px;
    gap: 2px;
    align-items: ${({ onMenu }) => onMenu ? "center" : "center"};
    justify-content: center;
    cursor: pointer;

    span{
        display: inline-flex;
        width: 32px;
        height: 4px;
        background-color: black;
        transition: all 0.5s ease-in-out;

        &:nth-of-type(1){
            background-color: #0E2536;
        }
        &:nth-of-type(2){
            width: ${({ onMenu }) => onMenu ? "16px" : "32px"};//
            background: linear-gradient(90deg,#F6B47D,#0E2536);
        }
        &:nth-of-type(3){
            width: ${({ onMenu }) => onMenu ? "24px" : "32px"};//
            background-color: #0E2536;
        }
    }
`

const Check = styled.div<{ onMenu: boolean }>`
    width: 100%;
    height: 100vh;
    background-color: #0E2536;
    transform: ${({ onMenu }) => onMenu ? "translateX(16px)" : "translateX(110%)"};
    visibility: ${({ onMenu }) => onMenu ? "visible" : "hidden"};
    opacity: ${({ onMenu }) => onMenu ? "1" : "0"};
    transition: all 0.5s cubic-bezier(0.66, 0.08, 0.14, 1.32);
    position: fixed;
    top: 40px;
    left: 0;
    z-index: 999;


    @media (min-width: 768px){
        top: 56px;
    }
`
const Header: FunctionComponent = () => {
    const [menu, setMenu] = useState<boolean>(false);
    return (
        <>
            <Wrapper onMenu={menu}>
                <HeaderStyled as="header">
                    <div>
                        <Image src={"/vectors/logo.svg"} width={96} height={24} />
                    </div>
                    <Menu onClick={() => setMenu(!menu)} onMenu={menu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Menu>
                </HeaderStyled>
            </Wrapper>
            <Check onMenu={menu}>l</Check>
        </>
    )
}

export default Header