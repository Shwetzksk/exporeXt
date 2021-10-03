import styled,{ createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary:#242627;
        --secondary:#2c2d31;
        --limeyellow:#fcf05a;
        --darkyellow:#fdbd40;
        --darkgray:#08070a;
        --lightgray:#888888;
        --peach:#e9686a;
        --white:#fff;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`
export const Container = styled.div`
    background-color:var(--primary);
    position:relative;
    width:100vw;
    height:100vh;
    display:flex;
`;

export const LeftPannel = styled.div`
    width:300px;
    background-color:var(--secondary);
    border-radius:20px;
    margin:20px 20px;
    padding:0 20px;
    display:grid;
    grid-template-rows:repeat(12,minmax(0,1fr));
    header{
        grid-row:1/3;
    }
    div{
        grid-row:3/12;
    }
    button{
        cursor: pointer;
        grid-row:12/13;
        width:100%;
        font-size:1.1rem;
        margin:10px 0;
    }
`;
export const RightPannel = styled.div`
    width:80%;
    margin:0 auto;
    hr{
        border:0;
        border-top:1px solid var(--lightgray);
        margin:0 15px;
    }
    header{
        display:grid;
        grid-template-columns:repeat(12,minmax(0,1fr));
        align-items:center;
        padding:50px 0 30px 0;
        .bread-crumbs{
            grid-column:1/4;
        }
        .search{
            grid-column:9/12;
        }
        .create-btn{
            grid-column:12/13;
        }
    }
`;
export const Header = styled.header`
    display:flex;
    margin:18px 15px;
    align-items:center;
    .logo{
        width:40px;
        height:40px;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
        margin:0 20px 0 15px;
    }
        
    p{
        color:var(--white);
        font-weight:600;
        font-size:1.3rem;
    }
`;