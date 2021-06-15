import React, { useContext } from 'react'
import '../App.css';
import styled, { ThemeContext } from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";

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

const HeaderLogo = styled.a`
  margin-top: 4px;
  position: absolute;
  top: 4px;
  left: 15px;
`

const HeaderLogoText = styled.span`
  font-size: 40px;
  font-family: 'Girassol', cursive;
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  top: -5px;
`

const DarkModeToggleSwitch = styled(DarkModeToggle)`
  margin-top: 5px;
  overflow: visible !important;
`

interface HeaderProps {
  text: string;
  href: string;
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ text, href, toggleTheme }) => {
  const { title } = useContext(ThemeContext)
  return (
    <HeaderSC>
      <H1>
        <HeaderLogo href={href}>
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Google Keep Logo" />
          <HeaderLogoText>{text}</HeaderLogoText>
        </HeaderLogo>
      </H1>
      <DarkModeToggleSwitch onChange={toggleTheme} checked={title === 'dark'} size={50} />
    </HeaderSC >
  )
}

export default Header
