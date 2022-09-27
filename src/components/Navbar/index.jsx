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
  NavTop,
  NavBtn,
  NavBtnLink,
  NavText
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import '../CSS/bootstrap/css/bootstrap.min.css'
import '../CSS/icofont/icofont.min.css'
import '../CSS/boxicons/css/boxicons.min.css'
import '../CSS/venobox/venobox.css'
import '../CSS/owl.carousel/assets/owl.carousel.min.css'
import '../CSS/aos/aos.css'
import '../CSS/general.css'


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
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
      <NavTop scrollNav={scrollNav}>
        <a to='/' onClick={toggleHome} className="back-to-top">
          <h>^</h>
        </a>
      </NavTop>
    </>
  )
}

export default Navbar
