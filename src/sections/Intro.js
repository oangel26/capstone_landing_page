import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const P = styled.p`
    font-family: 'Quicksand', sans-serif;
    margin: 10px 50px;
    text-align: center;
`;
const Div = styled.div`
    background-image: url("https://cdn.pixabay.com/photo/2015/01/11/10/28/container-ship-596083_1280.jpg");
    background-color: #cccccc;
    height: 60vh;
    background-position: 0px -300px;
    background-repetition: none;
`;
const H1 = styled.h1`
    font-family: 'Bebas Neue', cursive;
    margin: 0px;
    color: #003459;
    font-size: 40px;
`;

const Description = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
`;

const Box = styled.div`
    flex: 1 1 50%;
    text-align: center;
    color: #003459;
`;

const Button = styled.button`
    background-color: #003459;
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
`;

function Intro() {
    return (
      <section id='Intro'>
       <Header></Header>
        <Div>
        </Div>
        <Description>
            <Box>
            <H1>ALAS Soport Logico ltda. Web page restoration, user database management system, and user service interface </H1>
                <P>This project was made to give a solution ALAS Soporte Logico ltda. By devoloping it's landing page, so clients could access the company information and subscribe. Also, a web application was developed so the company cound have control over the subscription permits of the useres, and finaly a user interface was included to improve the file downloading experience of users.                     
                </P>
            </Box>
            <Box>
                <a target = "_blank" href = "http://www.google.com">
                    <Button>Go to proyect</Button>
                </a>
            </Box>
        </Description>
      </section>
    );
  }
  
  export default Intro;
  