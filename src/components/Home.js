import React from 'react'
import Starwars from '../Images/star-wars-logo-983.png'
// Styles
import { Wrapper, Logo } from './Home.styles'

// component
import MovieHero from './MovieHero'

export default function Home() {
    return (
        <Wrapper>
            <Logo src={Starwars} alt="Starwars-Logo" />
            <MovieHero />
        </Wrapper>
    )
}
