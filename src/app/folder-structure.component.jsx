import React from 'react';
import styled from 'styled-components';
import Folder from '../components/folder/folder.component';
import { useStore } from '../context/index.contex';

const Container = styled.div`
    margin:0 40px;
`


function Holder() {
    const { folder} = useStore();
    return (
        <Container>
            <Folder data={folder}>
                <Folder/>
            </Folder>
        </Container>
    )
}

export default Holder;
