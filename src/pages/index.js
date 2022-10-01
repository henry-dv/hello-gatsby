import * as React from 'react'
import Layout from '../components/layout'
import CustomTitle from '../components/customTitle'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="welcome to wembsite">
      <p>Let's monkey around on this keyboard and see what happens</p>
      <StaticImage
        alt="höööööööeeerrggghhhhhhh"
        src="../images/geräusch.jpg"
      />
    </Layout>
  )
}

export const Head = () => <CustomTitle title="Hi" />

export default IndexPage