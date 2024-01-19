import styled from "styled-components"
import { Header, HeaderGoldMenu, HeaderTop } from "../components/Header"

import heroBanner from "../assets/images/banner.png"
import logo from "../assets/images/logo0.png"
import about from "../assets/images/about.png"
import { HeroBanner } from "../components/Banner"
import { ScrollableList } from "../components/ScrollableList"

export default function Home() {
    return(
        <Container>
            <Header>
                <HeaderTop>
                    <img src={logo} width={150} />
                    {/* <div>
                        <CustomButton>
                            Entrar
                        </CustomButton>
                    </div> */}
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
            <About>
                <AboutImage>
                    <div className="shadow"/>
                    <img src={about} alt="" />
                </AboutImage>
                <div className="right-side">
                    <p>A Ordem dos Advogados é a instituição representativa dos licenciadosem Direito que exercem a advogacia.</p>
                    <button>Fale connosco</button>
                </div>
            </About>
            <AvailablePeoples>
                <h1>Advogados a disposição</h1>
                <ScrollableList />
            </AvailablePeoples>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`
const About = styled.div`
    margin: 50px 0;
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 45px 0;
    gap: 2rem;
    .right-side {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        justify-content: flex-start;
        align-items: flex-start;
        p {
            font-size: 3rem;
            width: 40rem;
            color: var(--secondaryColor);
        }
        button {
            padding: 15px 75px;
            border-radius: 50px;
            border: 2px solid var(--secondaryColor);
            color: var(--secondaryColor);
            background-color: transparent;
            font-size: 1rem;
        }
    }
`
const AboutImage = styled.div`
    position: relative;
    width: 50%;
    height: 500px;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
const AvailablePeoples = styled.div`
    margin: 0 auto;
    width: 95%;
    height: auto;
    transform: translateY(100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: 3rem;
        font-weight: 300;
        text-align: center;
        color: var(--secondaryColor);
    }
`