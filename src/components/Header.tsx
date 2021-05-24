import React, { useContext } from 'react'
import '../App.css';
import styled, { ThemeContext } from "styled-components";
import Switch from "react-switch";
import { shade } from "polished";

const HeaderSC = styled.header`
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.primary};

`
const H1 = styled.h1`
  margin-bottom: 0;
`
const HeaderLogo = styled.span`
  margin-top: 4px;
  position: absolute;
  top: 4px;
  left: 15px;
`
const HeaderLogoText = styled.span`
  font-size: 40px;
  font-family: 'Girassol', cursive;
  color: chocolate;
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  top: -5px;
`

interface HeaderProps {
  text: string;
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ text, toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext)
  return (
    <HeaderSC>
      <H1>
        <HeaderLogo>
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Google Keep Logo" />
          <HeaderLogoText>{text}</HeaderLogoText>
        </HeaderLogo>
      </H1>
      <Switch onChange={toggleTheme} checked={title === 'dark'} checkedIcon={false} uncheckedIcon={false} height={15} width={35} handleDiameter={20} offColor={shade(.15, '#e4a477')} offHandleColor="#D63AF9"
        onColor={colors.secondary} />
    </HeaderSC>
  )
}

export default Header
