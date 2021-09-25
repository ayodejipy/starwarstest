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
            
            th { text-align: left }
            
            td, th {
                padding: 10px;
                border: 1px solid #dddddd;
            }
        }
    }
    
`