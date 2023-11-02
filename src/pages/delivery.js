import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Zasilkovna from "../components/Zasilkovna/Zasilkovna"
import * as styles from "./pages.module.scss"



const DeliveryPage = () => {
  
  return (
    <>   
      <div className={styles.container}>
        <h1>Delivery</h1>
        <Zasilkovna />
      </div>
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Delivery" />

export default DeliveryPage