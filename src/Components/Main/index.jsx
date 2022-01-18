import styled from "styled-components"

import { Posts } from "./Post"

export default function Main() {
    return (
        <DivMain>
            {Posts.map((p, i) =>
                <DivMap key={i}>
                    <div>
                        <p className="date">{p.date}</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
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

    @media (max-width: 600px) {
        width: 90%
    }
`

const DivMap = styled.div`
    box-sizing: border-box;

    width: 100%;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);

    display: flex;
    flex-direction: column;

    padding: 25px;

    margin-bottom: 50px;

    div {
        display: flex;
        justify-content: space-between;

        ion-icon {
            font-size: 30px;
            color: #574AE8;
        }
    }

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