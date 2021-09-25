import React, { useState, useEffect } from 'react'
import API from '../../API';
// style
import { Wrapper } from './Movie.styles';

import Characters from '../Characters';

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
                        character: people,
                        height: height
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
    
    const TotalCharacters = () => {
        if(gender) {
            return characters.character.filter(a => a.gender == gender ).length
        }
        return characters.character.length
    }
    
    const heightSum = (heights) => {
        const reducer = (prev, next) => parseInt(prev) + parseInt(next);
        if(gender) {
            // filter through character and only return height
            let total = characters.character.filter(a => a.gender == gender ).map((h) => h.height )
            total = total.reduce(reducer, 0)
            // console.log({total})
            return total
        }
        let total = characters.height.reduce(reducer, 0)
        console.log({total})
        return total;
    }
    
    const convertHeight = () => {
        // console.log(heightSum(characters.height))
        
        let height = heightSum(characters.height)
        let cm2feet = 0.03281
        let inch = 12
        
        let feet = Math.ceil(height * cm2feet);
        return `${feet}ft`
         
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
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Height(cm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                { gender 
                                    ? characters.character.filter(a => a.gender == gender).map((character, i) => {
                                            return <Characters key={i} people={character} />
                                        })
                                    : characters.character.map((character, i) => {
                                        return <Characters key={i} people={character} />
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"> Total Characters: {TotalCharacters()}</td>
                                    <td>
                                        <p>{`${heightSum(characters.height)}cm - (${convertHeight()}/)` }</p>
                                        <p>Height(ft/in): { convertHeight() }</p>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>                
                    </div> 
                </>                
            )}
        </Wrapper>
    )
};
