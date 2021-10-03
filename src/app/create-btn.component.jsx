import React,{useState} from 'react';
import styled from 'styled-components';
import { useStore } from '../context/index.contex';

const Container = styled.div`
    margin:0 auto;
    position:relative;
    button{
        width:40px;
        height:40px;
        border-radius:50%;
        background-image:linear-gradient(to right,var(--darkyellow),var(--limeyellow));
        display:flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
        color:var(--peach);
        background-color:transparent;       
        border:0;
        font-size:1.2rem;
        :focus{
            outline:none;
        }
    }
`;

const Options = styled.div`
    display:${(props)=>props.active ? 'block':'none'};
    position:absolute;
    color:var(--white);
    background:var(--secondary);
    right:0;
    top:60px;
    padding:3px 20px ;
    width:100px;
    border-radius:18px;
    div{
        cursor: pointer;
    }
    p{
        margin:0;
        padding:10px 0;
        font-size:0.9rem;
    }
    .file{
        border-bottom:0.5px solid var(--darkgray);
    }
    
    
    
`

function Create() {
    const { popups } = useStore();
    const { newFolder, newFile, } = popups;
    const [options, setOptions] = useState(false);
    return (
        <Container className="create-btn">
            <button onClick={()=>{setOptions(!options)}}><i className="fas fa-plus"></i></button>
            <Options active={options} >
                <div className="file" onClick={newFile}>
                    <p>File</p>
                </div>
                <div className="folder" onClick={newFolder}>
                    <p>Folder</p>
                </div>
            </Options>
        </Container>
    )
}

export default Create
