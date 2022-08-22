import { ReactElement } from "react";
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from "styled-components";
import { Theme } from "../styles/theme";

export const GlobalStyle: GlobalStyleComponent<{ theme: Theme }, DefaultTheme> = createGlobalStyle`
    *,*::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body{
        background-color: #fff;
        font-family: ${({ theme }) => theme.fonts.secondary};
        min-height: 100vh;
        overflow-x: hidden;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: bold;
    }
`

const Layout = ({ children }: { children: ReactElement[] }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Layout;