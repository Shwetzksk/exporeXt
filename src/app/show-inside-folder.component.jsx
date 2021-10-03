import React from 'react';
import styled from 'styled-components';
import { useStore } from '../context/index.contex';
import folder from '../assets/folder-closed.png';
import file from '../assets/document.png';

const Container = styled.div`
    display:grid;
    margin:30px auto;
    grid-template-columns:repeat(5,minmax(0,1fr));
`;
const Card = styled.div`
    width:100px;
    height:80px;
    margin:auto;
    display:${props=>props.active?'grid':'none'};
    place-items:center;
    img{
        width:50px;
        height:50px;
    }
    p{
        text-align:center;
        padding:0;
        margin:0;color:var(--white);

    }
`;

export default function ShowFolder() {
    const {activeFolder} = useStore();
    return (
        <Container>
            {activeFolder.docs.map(({type,name}) => (<Card active={type==='file'?true:false}>
                <img src={type === 'folder' ? folder : file} alt="folder/file" />
                <p>{name}</p>
            </Card>))}
        </Container>
    )
}
