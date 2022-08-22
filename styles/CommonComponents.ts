import styled, { css } from "styled-components";


export const Container = styled.div`
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    /* max-width: 476px; */

    @media (min-width: ${({ theme }) => theme.breakpoints.xs})//576
    {
        display: block;
        max-width: 544px;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.sm})//768
    {
        /* padding-left: 24px;
        padding-right: 24px; */
        max-width: 720px;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md})//992
    {
        /* padding-left: 32px;
        padding-right: 32px; */
        max-width: 928px;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg})//1200
    {
        /* padding-left: 96px;
        padding-right: 96px; */
        max-width: 1200px;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.xl})//1440
    {
        /* padding-left: 128px;
        padding-right: 128px; */
        /* min-width: 1184px; */
        min-width: 1440px;
    }
`

export const Center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = css<{ breakpoint: "lg" | "sm" }>`
    display: inline-block;
    margin-top: 24px;
    padding: 16px 48px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 8px;

    width: ${({ breakpoint }) => breakpoint === "sm" ? "90%" : "50%"};
    background-color: ${({ breakpoint }) => breakpoint === "sm" ? "#F6B47D" : "#1A3300"};
    color: ${({ breakpoint }) => breakpoint === "sm" ? "#1A3300" : "#fff"};
`

export const HeroHeading1 = css<{ breakpoint: "lg" | "sm" }>`
    font-family: ${({ theme }) => theme.fontsprimary};
    font-size: 48px;
    margin-bottom: 8px;
    max-width: 500px;
    margin-top: 16px;
    line-height: 1.2;
    text-align: ${({ breakpoint }) => breakpoint === "sm" ? "center" : "left"};
    font-weight: ${({ breakpoint }) => breakpoint === "sm" ? "bold" : "900"};
    color: ${({ breakpoint }) => breakpoint === "sm" ? "#fff" : "#0E2536"};

    @media (min-width: 500px) {
        line-height: 1.2;
        font-weight: 900;
    }
    @media (min-width: 768px) {
        max-width: 576px;
        font-size: 64px;
        text-align: left;
    }
`

export const NavLink = css`
    height: 100%;//
    display: inline-flex;
    align-items: center;//
    justify-content: flex-end;
    padding-right: 16px;//
    color: #F6B47D;//
`