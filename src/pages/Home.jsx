import styled from "styled-components"
import { Header, HeaderGoldMenu, HeaderTop } from "../components/Header"
import { CustomButton } from "../components/Button"

import heroBanner from "../assets/images/banner.png"
import logo from "../assets/images/logo0.png"
import { HeroBanner } from "../components/Banner"

export default function Home() {
    return(
        <Container>
            <Header>
                <HeaderTop>
                    <img src={logo} width={150} />
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
                    <h1>Vamos ajudar você a encontrar um excelente Advogado.</h1>
                    <div>
                        <button>Entrar</button>
                        <button>Cadastrar</button>
                    </div>
                </div>
                <img src={heroBanner} alt="banner"/>
            </HeroBanner>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`