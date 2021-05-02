import React from "react"
import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostIntemWrapper>
      <S.PostItemTag background="#47650b">MISC</S.PostItemTag>

      <S.PostItemInfo>
        <S.PostItemDate>01 de maio de 2021 * 7min de leitura</S.PostItemDate>

        <S.PostItemTitle>Faça seu próprio medium</S.PostItemTitle>

        <S.PostItemDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          dolorum nesciunt at facere? Optio doloribus aliquam atque, molestiae
          reiciendis vero, ad ratione voluptates, modi fugit temporibus. Quasi
          magni consequatur totam!
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostIntemWrapper>
  </S.PostItemLink>
)

export default PostItem
