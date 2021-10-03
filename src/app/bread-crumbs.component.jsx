import React from 'react';
import styled from 'styled-components';

const Bread = styled.div`
    color:Var(--white);
    font-family: 'Roboto', sans-serif;
    padding:0 15px;
    font-size:1.2rem;
`;

function BreadCrumbs() {
    return (
        <Bread className="bread-crumbs">
            Instruments/frument
        </Bread>
    )
}

export default BreadCrumbs
