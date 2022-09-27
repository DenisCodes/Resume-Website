import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='hero' onClick={toggle}>Home</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='resume' onClick={toggle}>Resume</SidebarLink>
          <SidebarLink to='skills' onClick={toggle}>Skills</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
