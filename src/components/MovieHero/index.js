import React, { useEffect, useState } from 'react'
import API from '../../API'
import { Content, Wrapper } from './MovieHero.styles'
// components
import Movie from '../Movie'

// set initial state
// const initialState = {
//     count: 0,
//     next: null,
//     previous: null,
//     results: [],
// }

export default function MovieHero() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [selected, setSelected ] = useState('')
    
    const getMovies = async () => {
        setLoading(true)
        let data = await API.fetchMovies();
        console.log({data})
        setMovies(data.results)
        setLoading(false)
        // let dd = movies.results.sort((a, d) => {return a.created - d.created})
        // console.log({dd})
    }
    
    useEffect(() => {
        const getData = async () => {
            await getMovies();
        }
        
        getData();        
    }, [])
    
    
    return (
        <>
            <Wrapper>
                <Content>
                    <select name="movies" onChange={(e) => setSelected(parseInt(e.target.value) + 1)}>
                        <option value=""> Select movie </option>
                        { movies && movies.sort((a, d) => d.created - a.created).map((movie, index) => {
                            return <option key={index} value={index}>{movie.title}</option>                        
                        })}
                    </select>
                </Content>
            </Wrapper>
            
            { selected && 
                <Movie movieId={selected} />
            }
        </>
    )
}
