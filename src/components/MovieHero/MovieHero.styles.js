import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, 
        rgba(0, 0, 0, 0) 39%, 
        rgba(0, 0, 0, 0.65) 100%
        ), url(${ ({image}) => image }), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    /* height: 600px; */
    position: relative;
    animation: animateHeroImage 1.5s;
    
    @keyframes animateHeroImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const Content = styled.div`
    padding: 20px;
    max-width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: center;

    select {
        background: #c7c7c7;
        border: 1px solid #c7c7c7;
        padding: 8px 18px;
    }
`

