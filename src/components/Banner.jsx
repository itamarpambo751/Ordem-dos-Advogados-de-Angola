import styled from "styled-components";

export const HeroBanner = styled.div`
    width: 100%;
    height: 650px;
    position: relative;
    #shadow {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        //background: linear-gradient(to right, var(--primaryColor), 50%,transparent);
        background-color: rgba(0, 0, 0, .5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4rem;
        h1 {
            font-size: 4.2rem;
            text-align: center;
            width: 70%;
            line-height: 70px;
            font-weight: 600;
            color: white;
        }
        div {
            display: flex;
            gap: 2.5rem;
            button {
                padding: 15px 85px;
                border-radius: 0;
                border: none;
                border-radius: .3rem;
                &:first-child {
                    background-color: var(--secondaryColor);
                }
                &:nth-child(2) {
                    border: 2px solid var(--secondaryColor);
                    background-color: transparent;
                    color: var(--secondaryColor);
                }
            }
        }
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
` 