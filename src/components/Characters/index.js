import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../API';
// style
import { Wrapper } from './Characters.styles'

export default function Characters({ link }) {
    // let c = link.split("/")
    // console.log({c})
    
    
    return (
        <Wrapper>
            <h5>Characters</h5>
            <p>{link}</p>
        </Wrapper>
    )
}
