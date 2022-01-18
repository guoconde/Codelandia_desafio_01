import Header from "../Header"
import Main from "../Main"

import { ResetStyle } from "../../assets/css/reset"
import { GlobalStyle } from "../../assets/css"


export default function App() {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />

            <Header />
            <Main />
        </>
    )
}