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
        background: linear-gradient(to right, var(--primaryColor), 50%,transparent);
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
` 