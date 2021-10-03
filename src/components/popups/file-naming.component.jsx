import React from 'react';
import styled from 'styled-components';
import Btn from '../button/button.component';
import file from '../../assets/document.png';
import { useStore } from '../../context/index.contex';

const Container = styled.div`
    backdrop-filter:blur(20px);
    z-index:20;
    position:absolute;
    width:100vw;
    height:100vh;
    display:grid;
    place-items:center;   
`;

const Card = styled.div`
    width:350px;
    height:200px;
    border:1px solid var(--lightgray);
    background-color:var(--secondary);
    border-radius:20px;
    display:grid;
    place-items:center;
    padding:10px;
    .folder-input-container{
        display:flex;
        align-items:center;
        margin:30px auto 20px auto;
        img{
            width:50px;
            height:50px;
        }
        form{
            margin:0 15px;
            border:1px solid var(--darkgray);
            padding:10px;
            border-radius:10px;
            input{
                font-size:1rem;
                color:var(--white);
                background:transparent;
                border:0;
                :focus{
                    outline:none;
                    
                }
            }
        }

    }
    button{
        width:180px;
    }
    
    
`;


function Popup() {
    const { popups } = useStore();
    const { close } = popups.create;
    function closePopup(e) {
        const id = e.target.id;
        if (id === 'create-file-bg') {
            close();
        }
    }
    return (
        <Container id="create-file-bg" onClick={closePopup}>
            <Card>
                <div className="folder-input-container">
                    <img src={ file} alt="folder"/>
                    <form>
                        <input placeholder="Enter file name.."/>
                    </form>
                </div>
                <Btn>Create File</Btn>
            </Card>
        </Container>
    )
}

export default Popup
