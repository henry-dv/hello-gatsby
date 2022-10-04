import React from "react";
import Layout from "../../components/layout";
import CustomTitle from "../../components/customTitle";
import { graphql } from "gatsby";

const Post = ({data, children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>posted by: {data.mdx.frontmatter.author}</p>
      {children}
    </Layout>
  )
};

export const query = graphql`
  query ($id: String){
    mdx(id: {eq: $id}) {
      frontmatter {
        author
        title
      }
    }
  }
`

export const Head = ({data}) => <CustomTitle title={data.mdx.frontmatter.title}/>

export default Post