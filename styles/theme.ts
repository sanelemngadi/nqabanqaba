export const theme = {
    colors: {
        greys: {
            500: "#402F43",
            400: "#6E6271",
            300: "#D8D8D8",
            200: "#EEEEEE",
            100: "#F4F4F4",
        },
        primary: {
            500: "#6F0080",
            400: "#742680",
            300: "#B100CC",
            200: "#DB00FF",
            100: "#E74DFF",
        },
        secondary: "#5B0DFF",
        accent: {
            dark: "#1A3300",
            light: "#428000"
        },
        gradients: {
            basic: "linear-gradient(90deg,#DB00FF,#5B0DFF)",
            mixed: "linear-gradient(90deg,#DB00FF,#5B0DFF,#6F0080)"
        },
        error: "#FF0D48",
        default: "#fff"
    },
    fonts: {
        primary: "'Blinker', sans-serif",
        secondary: "'Anek Bangla', sans-serif"
    },
    types: {
        h1: {
            size: "90px",
            height: "96px"
        },
        h2: {
            size: "64px",
            height: "72px"
        },
        h3: {
            size: "45px",
            height: "46px"
        },
        h4: {
            size: "32px",
            height: "38px"
        },
        h5: {
            size: "23px",
            height: "28px"
        },
        h6: {
            size: "16px",
            height: "19px"
        },
        p: {
            size: "21px",
            height: "24px"
        },
    },
    breakpoints: {
        xm: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1440px"
    }


}

export type Theme = typeof theme;