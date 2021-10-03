import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { useStore } from '../context/index.contex';

const Bread = styled.div`   
    font-family: 'Roboto', sans-serif;
    padding:0 15px;
    margin-right:15px;
`;

const Crumbs = styled.span`
    color:var(--white);
    font-size:1.1rem;
`

function BreadCrumbs() {
    const { activeFolder, folder, breadcrumbs } = useStore();
    const [breads, setBreads] = useState('');
    
    useEffect(() => {
        const x =breadcrumbs.reduce((acc, curr, i) => {
            if (i) {
                return acc += ` / ${curr}`;
            }
            if (!i) {
                return acc += curr;
            }
        }, '');
        
        setBreads(x);
    }, [breadcrumbs]);

    return (
        <Bread className="bread-crumbs">
            <Crumbs>{ breads}</Crumbs>
        </Bread>
    )
}

export default BreadCrumbs
