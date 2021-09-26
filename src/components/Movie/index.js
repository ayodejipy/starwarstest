import React, { useState, useEffect } from 'react'
import API from '../../API';
// style
import { Wrapper } from './Movie.styles';
// Component
import Table from '../Table';

export default function Movie({ movieId }) {
    const [movie, setMovie] = useState([]);
    const [gender, setGender] = useState('')
    const [characters, setCharacters] = useState({
        character: [],
        height: [],
    });
    const [loading, setLoading] = useState(false);
    
    
    // console.log({movieId})
    
    const handleChange = (e) => {
        const { value } = e.target
        setGender(value);
    }
    
    const getMovie = async (movieId) => {
        setLoading(true)
        const people = []
        const height = []
        
        try {
            await API.fetchMovies(movieId)
            .then((data) => {
                console.log({data})
                setMovie(data)
                data.characters.map( async (char, i) => {
                    let link = char.toString().split('/')[5]
                    // console.log({link})
                    let data = await API.FetchPeople(link)
                    // set height and character
                    people.push(data)
                    height.push(data.height)
                    setCharacters(chars => ({
                        ...characters,
                        character: [...people],
                        height: [...height]
                    }))
                })
            });
            console.log({people})
            console.log({characters})
            setLoading(false)
            
        } catch (error) {
            console.log({ error })
        }
    }
    
    
    // const getCharacters = async () => {
    //     setLoading(true) 
    //     try {
    //         const load = [];
    //         if(!movie) return
    //         movie.characters.map( async (char, i) => {
    //             let data = await API.FetchPeople(char)
    //             console.log("Chars", data)
    //             // setCharacters(chars => [...chars,  data])
    //             setCharacters([data])
    //             return load.push(data)
    //         })
    //         console.log({load})
    //         console.log({characters})
            
    //     } catch(error) {
    //         console.log({error})
    //     }
    // }
    
    
    useEffect(() => {
        getMovie(movieId); 
        
    }, [movieId]);
    
    
    return (
        <Wrapper>
            {/* {loading && } */}
            
            {  loading ? <h2>Loading...</h2> : movie && (
                <>
                    <div className="opening_crawl">
                        <p>{ movie.opening_crawl }</p>         
                    </div>
                    
                    <div className="table-wrap">
                        <label> Filter by Gender</label>
                        <select name="movies" value={gender} onChange={handleChange}>
                            <option disabled> Select an option </option>
                            <option value=""> None </option>
                            <option value="male"> Male </option>
                            <option value="female"> Female </option>
                        </select>
                        
                        <Table gender={gender} characters={characters} />              
                    </div> 
                </>                
            )}
        </Wrapper>
    )
};
