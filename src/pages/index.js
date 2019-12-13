import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
        slug="/about/"
        background="green"
        category="Misc"
        date="23 de agosto de 2019"
        timeToRead="4 min"
        title="Veja nosso novo trabalho realizado"
        description="Apresentamos o blog da Arte e Mimo. Descubra o melhor da internet e mostre suas ideias."
    />
  </Layout>
)

export default IndexPage
