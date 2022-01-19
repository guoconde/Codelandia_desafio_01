import styled from "styled-components"

export default function Header({ search, setSearch }) {

    return (
        <DivHeader>
            <div className="title">
                <span>Codelândia</span>
                <span>blog</span>
            </div>
            <div className="search">
                <ion-icon name="search-outline"></ion-icon>
                <input type="search" name="Pesquisa" placeholder="Pesquisar no blog" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
        </DivHeader>
    )
}

const DivHeader = styled.div`
    width: 100%;
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 73px;
    
    position: fixed;
    top: 0;
    
    background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
    
    z-index: 2;
    
    @media (max-width: 600px) {
        height: 200px;
        gap: 41px;
    }

    .title {
        width: 70%;

        display: flex;
        justify-content: space-between;

        margin-top: 41px;
        color: white;
        
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
        
        @media (max-width: 600px) {
            width: 90%;
            
            font-size: 18px;
            font-weight: 400;

            margin-top: 48px;
        }
    }

    .search {
        box-sizing: border-box;

        width: 70%;
        height: 65px;
        
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        
        display: flex;
        align-items: center;
        gap: 20px;
        
        padding-left: 20px;
        
        @media (max-width: 600px) {
            width: 90%;
            height: 40px;
        }
        
        ion-icon {
            color: #FFF;
            font-size: 22px;
            
            @media (max-width: 600px) {
                font-size: 18px;
            }
        }
        
        input {
            all: unset;
            width: 90%;
            
            font-family: Inter;
            font-size: 18px;
            font-weight: 500;
            line-height: 22px;
            
            ::placeholder{
                color: rgba(255, 255, 255, 0.2);
            }
            
            @media (max-width: 600px) {
                width: 80%;
                font-family: Inter;
                font-size: 14px;
                font-weight: 500;
                line-height: 17px;
            }

        }
    }
`