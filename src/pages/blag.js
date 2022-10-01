import * as React from 'react'
import Layout from '../components/layout'
import CustomTitle from '../components/customTitle'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const BlagPage = ({data}) => {
    return(
        <Layout pageTitle="blag posts">
            {
                data.allFile.nodes.length === 0 ? 
                (
                    <div>
                        <p>Here's where I'd put my blag posts...</p>
                        <StaticImage src="../images/angry_man.jpg" />
                    </div>
                ) :
                (
                    <ul>
                    {
                        data.allFile.nodes.map(node => (
                            <li key={node.name}>
                                {node.name}
                            </li>
                        ))
                    }
                    </ul>
                )
            }
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <CustomTitle title="Blag" />

export default BlagPage