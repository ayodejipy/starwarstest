import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 20px 0;
    width: 100%;
    color: #fff;
    
    .opening_crawl {
        width: 400px;
        height: 480px;
        margin: 0 auto;
        
        p {
            display: inline-block;
            color: #fcdf2b;
            animation: animatecrawl 7s linear infinite;
            
            @keyframes animatecrawl {
                0% { transform: translate(0, 70%); }
                100% { 
                    transform: translate(0, -80%);
                    opacity: 0; 
                }
            }
            
            :hover {
                animation-play-state: paused;
            }
        }
        
    }
    
    .table-wrap {
        width: 80%;
        margin: 0 auto;
        
        label {
            display: block;
            margin: 5px 0;
            font-weight: 500;
        }
        
        select {
            margin-bottom: 20px;
            background: #c7c7c7;
            border: 1px solid #c7c7c7;
            padding: 8px 18px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            
            thead button {
                border: 0;
                border-radius: none;
                font-family: inherit;
                font-weight: 700;
                font-size: inherit;
                padding: 0.5em;
                margin-bottom: 1px;
            }

            thead button.ascending::after {
                content: '👇';
                display: inline-block;
                margin-left: 1em;
            }

            thead button.descending::after {
                content: '☝️';
                display: inline-block;
                margin-left: 1em;
            }
            
            th { text-align: left }
            
            td, th {
                padding: 10px;
                border: 1px solid #fcdf2b;
            }
        }
    }
    
`