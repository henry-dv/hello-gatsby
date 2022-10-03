import * as React from 'react'
import Layout from '../components/layout'
import CustomTitle from '../components/customTitle'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const BlagPage = ({data}) => {
    return(
        <Layout pageTitle="blag posts">
            {
                data.allMdx.nodes.length === 0 ? 
                (
                    <div>
                        <p>Here's where I'd put my blag posts...</p>
                        <StaticImage src="../images/angry_man.jpg" />
                    </div>
                ) :
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p><i>by {node.frontmatter.author}</i></p>
                        <p>{node.excerpt}</p>
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
        }
        id
        excerpt
      }
    }
  }
  
`

export const Head = () => <CustomTitle title="Blag" />

export default BlagPage