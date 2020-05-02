import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({ data }) => (
  <Layout>
    <SEO title="Files" />
    <h2>Author</h2>
    <p>{data.site.siteMetadata.author}</p>
    <h2>Files</h2>
    {data.allFile.edges.map(({node}) => <div key={node.name}>{node.name}</div>)}
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage

export const query = graphql`
query ThirdPageQuery {
  allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
    edges {
      node {
        name
      }
    }
  }
  site {
    siteMetadata {
      author
    }
  }
}
`