import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 20px 0;
    width: 100%;
    color: #fff;
    
    .opening_crawl {
        width: 400px;
        margin: 0 auto;
        
        p {
            display: inline-block;
            animation: animatecrawl 4s linear infinite;
            
            @keyframes animatecrawl {
                0% { transform: translateY(0, 0); }
                100% { transform: translateY(0, -100%); }
            }
        }
        
    }
`