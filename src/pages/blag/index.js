import * as React from 'react'
import Layout from '../../components/layout'
import CustomTitle from '../../components/customTitle'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const BlagPage = ({ data }) => {
  return (
    <Layout pageTitle="blag posts">
      {
        data.allMdx.nodes.length === 0 ?
          (
            <div>
              <p>Here's where I'd put my blag posts...</p>
              <StaticImage src="../../images/angry_man.jpg" />
            </div>
          ) :
          data.allMdx.nodes.map(node => (
            <article>
              <h2>
                <Link to={`blag/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p><i>by: {node.frontmatter.author}</i></p>
            </article>
          ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___number}) {
      nodes {
        frontmatter {
          author
          title
          slug
        }
        id
        excerpt
      }
    }
  }
  
`

export const Head = () => <CustomTitle title="Blag" />

export default BlagPage