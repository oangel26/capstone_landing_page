import React from 'react';
import styled from 'styled-components';

const Header1 = styled.header`
    display: flex;
    background-color: #00171F;
    font-weight: bold;
    color: white;
    justify-content: space-between;
    height: 10vh;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 20px;
    `;

const A = styled.a`
    color: white;
    margin-left: 10px;
`;
function Header() {
    return (
        <Header1>
          <span>Three Little Devs Software</span>
          <nav>
              <A href='#Intro'>Intro</A>
              <A href='#Feature'>Feature</A>
              <A href='#About'>About</A>
          </nav>
        </Header1>
    );
  }
  
  export default Header;