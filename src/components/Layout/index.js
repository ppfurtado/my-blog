import * as React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import GlobalStyle from "../../styles/global"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

const LayoutWrapper = styled.section`
  display: flex;
`
const LayoutMain = styled.main`
  background: #16202c;
  min-height: 100vh;
  padding: 0 3.75rem 0 22rem;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Sidebar />
      <LayoutMain> {children} </LayoutMain>
      <MenuBar />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
