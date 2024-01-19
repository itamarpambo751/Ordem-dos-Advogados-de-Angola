import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 100px;
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--primaryColor);
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 999;
`

export const HeaderTop = styled.div`
    width: 95%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderGoldMenu = styled.div`
    width: 60%;
    height: 50px;
    background-color: var(--secondaryColor);
    margin-left: auto;
    position: relative;
    bottom: -20px;
    display: flex;
    align-items: center;
    padding: 0% 40px;
    position: absolute;
    right: 0;
    top: 70px;
    nav ul {
        list-style-type: none;
        display: flex;
        gap: 3rem;
    }
    nav ul li a {
        color: white;
    }
`
