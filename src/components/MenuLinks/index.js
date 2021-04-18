import React from "react"
import * as S from "./styled"
import links from "./content"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link) => (
        <S.MenuLinksItem key={link.label}>
          <S.MenuLinksLink
            activeClassName="active"
            to={link.url}
            target="_blank"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
