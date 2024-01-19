import { useEffect } from "react"
import styled from "styled-components"

export const AvailablePeople = (user) => {
    useEffect(() => console.log(user), [])
    return(
        <Card/>
    )
}

const Card = styled.div`
    display: inline-block;
    width: 400px;
    height: 500px;
    border: 1px solid var(--secondaryColor);
`