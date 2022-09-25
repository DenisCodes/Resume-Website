import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
  NavText
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 480) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo scrollNav={scrollNav} to='/' onClick={toggleHome}>Denis Smirnov</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem >
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                <NavText scrollNav={scrollNav}>
                  About
                </NavText>
              </NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to='skills'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                <NavText scrollNav={scrollNav}>
                  Skills
                </NavText>
              </NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to='resume'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                <NavText scrollNav={scrollNav}>
                  Resume
                </NavText>
              </NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to='projects'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                <NavText scrollNav={scrollNav}>
                  Projects
                </NavText>
              </NavLinks>
            </NavItem>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
