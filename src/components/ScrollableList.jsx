import styled from "styled-components"

import { Availables } from "../data/availables"
import { AvailablePeople } from "."
import { ArrowLeft, ArrowRight } from "phosphor-react"
import React from "react"

const arrayItems = Availables
export const ScrollableList = () => {
    const [scrollable, setScrollable] = React.useState(0)
    return(
        <ScrollableListItems>
            <ScrollablePointer onClick={() => setScrollable(() => {
                if (scrollable + 1320 < (arrayItems.length - 1 * 440))
                    return scrollable + 1320
                return scrollable
            })}>
                <ArrowLeft />
            </ScrollablePointer>
            <HorizontalScrollableContainer count={arrayItems.length} scrollable={scrollable}>
                {arrayItems.map((user) => <AvailablePeople key={user.identity} {...user}/>)}
            </HorizontalScrollableContainer>
            <ScrollablePointer onClick={() => setScrollable(() => {
                if (scrollable - 1320 > -(arrayItems.length * 440))
                    return scrollable - 1320
                return scrollable
            })}>
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
`// (400px + 40px) * 3 = 1320px
const HorizontalScrollableContainer = styled.div((props) => `
    width: ${(props.count * 440) + 'px'};
    div { &:first-child { margin-left: ${ props.scrollable + 'px' } } }
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