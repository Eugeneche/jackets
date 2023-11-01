import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { Script } from "gatsby"
//import Layout from "../components/layout"
import Seo from "../components/seo"
import Zasilkovna from "../components/Zasilkovna/Zasilkovna"
//import * as styles from "../components/index.module.css"



const IndexPage = () => {
  
  return (
  <>   
      <h1>Welcome</h1>
      <section>
        <Zasilkovna />
      </section>
      <Script src="https://widget.packeta.com/v6/www/js/library.js" />
  </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
