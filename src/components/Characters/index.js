import React, { useState, useEffect } from 'react'
import API from '../../API';
// style
import { Wrapper } from './Characters.styles'

export default function Characters({ people }) {
    // const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // console.log({movieId})
    
    // const getCharacter = async (link) => {
    //     setLoading(true)
        
    //     try {
    //         let data = await API.FetchPeople(link);
    //         console.log({data})
    //         setPeople(data)
    //         setLoading(false)
            
    //     } catch (error) {
    //         console.log({ error })
    //     }
    // }
    
    // useEffect(() => {
    //     getCharacter(link);
            
    // }, [link]);
    
    const handleFilter = (e) => {
        const { value } = e.target;
        
    } 
    
    return (
        <tr>
            <td>{people.name}</td>
            <td>{people.gender == "male" ? "M" : people.gender == "female" ? "F" : "N/A"}</td>
            <td>{people.height}</td>
        </tr>
    )
}
