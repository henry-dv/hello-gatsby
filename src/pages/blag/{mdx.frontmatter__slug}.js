import React from "react";
import Layout from "../../components/layout";
import CustomTitle from "../../components/customTitle";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Post = ({data, children}) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>posted by: {data.mdx.frontmatter.author}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      {children}
    </Layout>
  )
};

export const query = graphql`
  query ($id: String){
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        author
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({data}) => <CustomTitle title={data.mdx.frontmatter.title}/>

export default Post