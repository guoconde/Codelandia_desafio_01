import styled from "styled-components"
import { Posts } from "./Posts/Information"

import Notice from "./Posts"

export default function Main({ search }) {

    function filterByText({ title }) {
        return title.toUpperCase().includes(search.toUpperCase())
    }

    return (
        <DivMain>
            {
                Posts.filter(filterByText).map((p, i) =>
                    <Notice post={p} key={i} />
                )
            }
        </DivMain>
    )
}

const DivMain = styled.div`
    width: 70%;

    margin: 0 auto;
    margin-top: 315px;

    @media (max-width: 600px) {
        width: 90%;

        margin-top: 265px;
    }
    `

