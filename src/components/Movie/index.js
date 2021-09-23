import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../API';
// style
import { Wrapper } from './Movie.styles';

import Characters from '../Characters';

export default function Movie({ movieId }) {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // console.log({movieId})
    
    const getMovie = async (movieId) => {
        setLoading(true)
        
        try {
            let data = await API.fetchMovies(movieId);
            console.log({data})
            setMovie(data)
            setLoading(false)
            
        } catch (error) {
            console.log({ error })
        }
    }
    
    useEffect(() => {
        getMovie(movieId);
            
    }, [movieId]);
    
    
    return (
        <Wrapper>
            <h5>Movie</h5>
            
            {/* {loading && } */}
            
            {  loading ? <h2>Loading...</h2> : (
                <>
                    <div className="opening_crawl">
                        <p>{ movie.opening_crawl }</p>                
                    </div>
                    
                    { movie.characters.map((character, i) => {
                        return <Characters key={i} link={character} />
                    })}
                </>                
            )}
        </Wrapper>
    )
};
