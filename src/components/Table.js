import React from 'react'
import Characters from './Characters'

export default function Table({ gender, characters }) {
    
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
        let cm2inch = 39.37
        let feet2inch = 12
        
        let inch = (12 * (height % cm2inch) + 1 )
        console.log({inch})
        
        let feet = Math.floor(height * cm2feet);
        return `${feet}ft`
    }
    
    return (
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
    )
}
