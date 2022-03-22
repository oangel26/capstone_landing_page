import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const P = styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    font-family: 'Bebas Neue', cursive; 
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
            <H1>Subscribtion page and user management</H1>
                <P>Page with login and register for ALAS users, 
                    which can access to different services according to the users subscrition permits.
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
  