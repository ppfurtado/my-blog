import React from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { LightbulbFill as Light } from "@styled-icons/bootstrap/LightbulbFill"
import { Grid } from "@styled-icons/bootstrap/Grid"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGruop>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGruop>

    <S.MenuBarGruop>
      <S.MenuBarItem title="Mudar o Tema">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o top">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGruop>
  </S.MenuBarWrapper>
)

export default MenuBar
