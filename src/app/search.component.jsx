import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
    color:var(--lightgray);
    label{       
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:8px 10px;
        
    }
    input{
        background:transparent;
        border:0;
        width:100%;
        font-size:1.1rem;
        color: var(--white);
        :focus{
            outline:none;
        }
       
    }
    background-color: var(--secondary);
    border-radius:25px;
    padding:0 10px;
`;

function Search() {
    return (
        <Container className="search">
            <label>
                <input placeholder="Search.."/>
                <i className="fas fa-search"></i>
            </label>
        </Container>
    )
}

export default Search
