import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Zasilkovna from "../components/Zasilkovna/Zasilkovna"
import ProductOffer from "../components/ProductOffer/ProductOffer"
import * as styles from "./pages.module.scss"



const IndexPage = () => {
  
  return (
    <>   
      <div className={styles.container}>
        <h1>Welcome</h1>
      </div>
        
  {/*       <section>
          <ProductOffer />
        </section> */}
        <ProductOffer />
        <section>
          <Zasilkovna />
        </section>
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
