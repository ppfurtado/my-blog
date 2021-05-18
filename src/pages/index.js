import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              category
              background
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: { title, description, date, category, background, timeToRead },
        }) => (
          <PostItem
            key={title}
            slug={title}
            date={date}
            timeToRead={timeToRead}
            category={category}
          />
        )
      )}
      <PostItem
        slug="/about/"
        date="30 de Julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
      />
    </Layout>
  )
}

export default IndexPage
