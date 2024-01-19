import styled from "styled-components"

import { Availables } from "../data/availables"
import { AvailablePeople } from "."
import { ArrowLeft, ArrowRight } from "phosphor-react"

const arrayItems = Availables
export const ScrollableList = () => {
    return(
        <ScrollableListItems>
            <ScrollablePointer>
                <ArrowLeft />
            </ScrollablePointer>
            <HorizontalScrollableContainer count={arrayItems.length}>
                {arrayItems.map((user) => <AvailablePeople key={user.identity} {...user}/>)}
            </HorizontalScrollableContainer>
            <ScrollablePointer>
                <ArrowRight />
            </ScrollablePointer>
        </ScrollableListItems>
    )
}
const ScrollableListItems = styled.ul`
    width: 95%;
    margin: 0 auto;
    overflow-x: hidden;
    transform: translateY(100px);
    position: relative;
`
const HorizontalScrollableContainer = styled.div((properties) => `
    width: ${(properties.count * 500) + 'px'};
    div { &:not(:first-child) { margin-left: 40px } }
`)
const ScrollablePointer = styled.button`
    position: absolute;
    top: 50%;
    &:first-child { 
        left: 0px; 
    }
    &:last-child { 
        right: 0;
    }
    border-radius: 30px;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`