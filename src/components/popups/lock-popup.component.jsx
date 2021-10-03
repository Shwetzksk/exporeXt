import React from 'react';
import styled from 'styled-components';
import Btn from '../button/button.component';
import folder from '../../assets/folder-closed.png';
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
            display:flex;
            margin:0 15px;
            border-radius:10px;
            .pin-box{
                border:1px solid var(--darkgray);
                width:40px;
                height:40px;
                display:flex;
                margin:0 5px;
                border-radius:5px;
            }
            input{
                width:100%;
                font-size:1rem;
                color:var(--white);
                background:transparent;
                border:0;
                text-align:center;
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
    const { closeLock } = popups.lock;
    function closePopup(e) {
        const id = e.target.id;
        if (id === 'lock-bg') {
            closeLock();
        }
    }
    return (
        <Container id="lock-bg" onClick={closePopup}>
            <Card>
                <div className="folder-input-container">
                    <form>
                        <div className="pin-box">
                            <input maxLength="1" />
                        </div>
                        <div className="pin-box">
                            <input maxLength="1" />
                        </div>
                        <div className="pin-box">
                            <input maxLength="1" />
                        </div>
                        <div className="pin-box">
                            <input maxLength="1" />
                        </div>
                    </form>
                </div>
                <Btn>Set Lock</Btn>
            </Card>
        </Container>
    )
}

export default Popup
