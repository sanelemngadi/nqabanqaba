import type { AppProps } from 'next/app';
import Header from '../hocs/Header';
import Footer from '../hocs/Footer';
import Layout from '../layout/GlobalLayout';
import { ThemeProvider } from "styled-components";
import { theme } from '../styles/theme';
// import "../node_modules/bootstrap/scss/bootstrap.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
