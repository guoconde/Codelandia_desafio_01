import Header from "../Header"
import Main from "../Main"

import { ResetStyle } from "../../assets/css/reset"
import { GlobalStyle } from "../../assets/css"
import { useState } from "react"


export default function App() {

    const [ search, setSearch ] = useState('')

    return (
        <>
            <ResetStyle />
            <GlobalStyle />

            <Header search={search} setSearch={setSearch} />
            <Main search={search} />
        </>
    )
}