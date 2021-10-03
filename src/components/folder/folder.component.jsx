import React,{useState} from 'react';
import styled from 'styled-components';
import folderclose from '../../assets/folder-closed.png';
import folderopen from '../../assets/folder-open.png';

const Container = styled.div`
    margin:3px 0;
`;
const FolderBar = styled.div`
    background-color:${props=>props.expand?'var(--darkgray)':'var(--primary)'};
    color:var(--white);
    display:flex;
    align-items:center;
    height:30px;
    border-radius:5px;
    padding:0 5px;
    cursor: pointer;
    img{
        width:20px;
        height:20px;
        margin:0 10px;
    }
`;
const SubContainer = styled.div`
    display:${props => props.expand ? 'block' : 'none'};
    border:0;
    border-left:1px solid var(--lightgray);
    margin-left:6px;
    padding-top:8px;
   .cover{
      margin: 0 0 8px 6px; 
    }
`;

function Folder(props) {
    const [expand, setExpand] = useState(false);
    const {name,docs} = props.data;
    return (
        <Container>
            <FolderBar onClick={()=>{setExpand(!expand)}} expand={expand}>
                {!expand && <img src={folderclose} alt="folder" />}
                {expand && <img src={folderopen} alt="folder" />}
                <p>{ name}</p>
            </FolderBar>
            <SubContainer expand={expand}>
                {docs.map((doc) => <Folder data={doc} />)}
            </SubContainer>
        </Container>
    )
}

function Bar(props) {
    const [expand, setExpand] = useState(false);
    const { data } = props;
    return (
        <FolderBar onClick={()=>{setExpand(!expand)}} expand={expand}>
            {!expand && <img src={folderclose} alt="folder" />}
            {expand && <img src={folderopen} alt="folder" />}
            <p>{ data.name}</p>
        </FolderBar>
    )
}

export default Folder
