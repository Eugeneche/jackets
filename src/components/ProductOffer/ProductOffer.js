import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import * as styles from "./_ProductOffer.module.scss"
//import { Link } from "gatsby"
import LocalizedLink from "../localizedLink"

const ProductOffer = () => {

    const { 
        prod_description,
        prod_properties,
        order
     } = useTranslations()

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>Product Offer</h2>
                <div className={styles.products}>
                    <StaticImage src="../../images/brown.jpg" alt="brown jacket" />
                    <StaticImage src="../../images/black.jpg" alt="black jacket" />
                </div>
                <p className={styles.productDescription}>
                    {prod_description}
                </p>
                <p className={styles.productDescription}>
                    {prod_properties}
                </p>
                <LocalizedLink to="/order">
                    <button className={styles.orderBtn}>{order}</button>
                </LocalizedLink>
                
            </div>
        </section>
    )

}

export default ProductOffer