import React from 'react'
import '../App.css';
import styled from "styled-components";

const HeaderSC = styled.header`
  height: 3.5rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100vw;
`
const H1 = styled.h1`
  margin-bottom: 0;
`
const HeaderLogo = styled.span`
  position: absolute;
  top: 4px;
  left: 15px;
`
const HeaderLogoText = styled.span`
  font-size: 40px;
  font-family: 'Girassol', cursive;
  color: chocolate;
  position: absolute;
  top: -5px;
`

const Header: React.FC = () => {
  return (
    <HeaderSC>
      <H1>
        <HeaderLogo>
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Google Keep Logo" />
          <HeaderLogoText>Notebook</HeaderLogoText>
        </HeaderLogo>
      </H1>
    </HeaderSC>
  )
}

export default Header
