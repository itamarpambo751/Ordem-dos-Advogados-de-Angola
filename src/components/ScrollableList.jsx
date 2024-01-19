import styled from "styled-components"

import { Availables } from "../data/availables"
import { AvailablePeople } from "."

const arrayItems = Availables
export const ScrollableList = () => {
    return(
        <ScrollableListItems>
            <HorizontalScrollableContainer itemsCount={arrayItems.length}>
                {arrayItems.map((user) => <AvailablePeople key={user.identity} {...user}/>)}
            </HorizontalScrollableContainer>
        </ScrollableListItems>
    )
}
const ScrollableListItems = styled.ul`
    width: 95%;
    margin: 0 auto;
    overflow-x: hidden;
    transform: translateY(100px);
`
const HorizontalScrollableContainer = styled.div(({ itemsCount }) => `
    width: ${(itemsCount * 500) + 'px'};
    div { &:not(:first-child) { margin-left: 40px } }
`)
const ScrollablePointer = styled.button`
    
`