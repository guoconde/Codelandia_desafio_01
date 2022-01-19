import { useState } from "react"
import styled from "styled-components"

export default function Notice({ post }) {

    const [changeHeart, setChange] = useState(false)

    function fillHeart() {
        changeHeart === false ? setChange(true) : setChange(false)
    }

    return (
        <DivMap>
            <div>
                <p className="date">{post.date}</p>
                <div onClick={fillHeart}>
                    {
                        changeHeart ?
                            <ion-icon name='heart' id={post.id}></ion-icon>
                            :
                            <ion-icon name='heart-outline' id={post.id}></ion-icon>
                    }
                </div>
            </div>
            <p className="title">{post.title}</p>
            <p className="msg">{post.msg}</p>
        </DivMap>
    )
}

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
            
            @media (max-width: 600px) {
                font-size: 22px;
            }
        }
    }
    
    .date {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        
        margin-bottom: 25px;
        
        @media (max-width: 600px) {
            font-size: 14px;
            line-height: 18px;
        }
    }
    
    .title {
        font-size: 26px;
        font-weight: 400;
        line-height: 33px;
        
        margin-bottom: 10px;
        
        @media (max-width: 600px) {
            font-size: 18px;
            line-height: 23px;
        }
    }
    
    .msg {
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        
        @media (max-width: 600px) {
            font-size: 14px;
            line-height: 26px;
        }
    }
`