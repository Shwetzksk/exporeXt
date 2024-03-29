import React,{useState} from 'react';
import styled from 'styled-components';
import folderclose from '../../assets/folder-closed.png';
import folderopen from '../../assets/folder-open.png';
import { useStore } from '../../context/index.contex';
const Container = styled.div`
    margin:5px 0;
    width:100%;
`;
const FolderBar = styled.div`
    background-color:${props=>props.expand?'var(--darkgray)':'var(--primary)'};
    color:var(--white);
    display:flex;
    align-items:center;
    height:30px;
    width:100%;
    border-radius:5px;
    padding:0 5px;
    cursor: pointer;
    margin-left:8px;
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
    margin-left:10px;
    padding-top:3px;
`;

function Folder(props) {
    const [expand, setExpand] = useState(false);
    const {addBreadCrumbs,breadcrumbs,removeBreadCrumbs,addActiveFolder} = useStore();
    const { name, docs,type } = props?.data;
    function setActiveFolder() {
        
        if(!expand){
            addBreadCrumbs(name);
            
        } else {
            removeBreadCrumbs()           
        }
        addActiveFolder(props.data);
        
    }
    return (
        <>

            {type==='folder'&&<Container >
                <FolderBar  onClick={(e) => { setExpand(!expand);setActiveFolder(e)}} expand={expand}>
                    {!expand && <img src={folderclose} alt="folder" />}
                    {expand && <img src={folderopen} alt="folder" />}
                    <p>{ name}</p>
                </FolderBar>
                
                {type==='folder'&&docs.length >0 && <SubContainer expand={expand}>
                    {docs.map((doc) => <Folder data={doc} />)}
                </SubContainer>}
            </Container>}
        </>
    )
}


export default Folder
