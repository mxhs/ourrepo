import styled from 'styled-components'
import overlay from './images/overlay.png'
import patternS1 from './images/pattern-size1.svg'

export const StyledSignUp = styled.div`

    *{
        /* border: 1px solid red; */
    }

    background-color: #f7f7f7;

    .mainBody{
        background-color: #4696e5;
        padding: 0 0 2.5rem 0;
        -moz-align-items: center;
        -webkit-align-items: center;
        -ms-align-items: center;
        align-items: center;
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: space-evenly;
        background-image: url(${overlay}), url(${patternS1});
        background-position: top left, center center;
        background-attachment: fixed, fixed;
        background-size: auto, cover;
        height: 70vh;
        min-height: 35em;
        border-bottom: 2px solid #828282;
        border-bottom-left-radius: 50% 6%;
        border-bottom-right-radius: 50% 6%;
    }

    &::after{
        content:'';
        width: 100%;
        height: 30vh;
        background: #f7f7f7;
        position: absolute;
    }

    .mainBody div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .welcome{
        width: 40%;
    }
    
    h1{
        color: #fff;
        font-size:2.5rem;
        font-weight: 700;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    .errorMessage{
        font-size:.8rem;
        color: black;
    }

    .form div {
        max-width: 100%;
    }

    .form{
        background: white;
        width: 20%;
        border-radius: 10px;
        border: 2px solid #eeeeee;
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem 1.5rem;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                    0 2px 4px rgba(0,0,0,0.07), 
                    0 4px 8px rgba(0,0,0,0.07), 
                    0 8px 16px rgba(0,0,0,0.07),
                    0 16px 32px rgba(0,0,0,0.07), 
                    0 32px 64px rgba(0,0,0,0.07);
    }

    .form input {
        width: 100%;
        margin-bottom: 5%;
    }

    h2{
        font-weight: bolder;
        color: #828282
    }
`