import styled from "styled-components"

import { Posts } from "./Post"

export default function Main() {
    return (
        <DivMain>
            {Posts.map((p, i) =>
                <DivMap key={i}>
                        <p className="date">{p.date}</p>
                        <p className="title">{p.title}</p>
                        <p className="msg">{p.msg}</p>
                </DivMap>
            )}
        </DivMain>
    )
}

const DivMain = styled.div`
    width: 70%;

    margin: 0 auto;
    margin-top: 315px;
`

const DivMap = styled.div`
    box-sizing: border-box;

    width: 100%;
    background-color: #FFF;
    border-radius: 5px;

    display: flex;
    flex-direction: column;

    padding: 25px;

    margin-bottom: 50px;

    .date {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;

        margin-bottom: 25px;
    }

    .title {
        font-size: 26px;
        font-weight: 400;
        line-height: 33px;

        margin-bottom: 10px;
    }

    .msg {
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
    }
`