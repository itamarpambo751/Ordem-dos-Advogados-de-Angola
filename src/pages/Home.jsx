import styled from "styled-components"
import { Header, HeaderGoldMenu, HeaderTop } from "../components/Header"
import { CustomButton } from "../components/Button"

import heroBanner from "../assets/images/banner.png"
import { HeroBanner } from "../components/Banner"

export default function Home() {
    return(
        <Container>
            <Header>
                <HeaderTop>
                    <h1>Logo</h1>
                    <div>
                        <CustomButton>
                            Entrar
                        </CustomButton>
                    </div>
                </HeaderTop>
                <HeaderGoldMenu>
                    <nav>
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Notícias</a></li>
                            <li><a href="#">Advogados</a></li>
                            <li><a href="#">Quem somos</a></li>
                        </ul>
                    </nav>
                </HeaderGoldMenu>
            </Header>
            <HeroBanner>
                <div id="shadow">
                    
                </div>
                <img src={heroBanner} alt="banner"/>
            </HeroBanner>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`