import React from 'react';
import styled from 'styled-components';
import Folder from '../components/folder/folder.component';
import { useStore } from '../context/index.contex';

const Container = styled.div`
    margin:0 30px;
`


function Holder() {
    const { folderBranch} = useStore();
    return (
        <Container>
            {folderBranch.map(folder=><Folder data={folder}>
                <Folder/>
            </Folder>)}
        </Container>
    )
}

export default Holder;
