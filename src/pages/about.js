import * as React from 'react'
import Layout from '../components/layout'
import CustomTitle from '../components/customTitle'

const AboutPage = () => {
  return (
    <Layout pageTitle="about me">
      <p>I AM A BEEEEEEEEEEEEEEEEEEE!!!!!! 🐝🐝🐝</p>
    </Layout>
  )
}

export const Head = () => <CustomTitle title="About" />

export default AboutPage