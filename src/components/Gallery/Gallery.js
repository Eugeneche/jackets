import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./_Gallery.module.scss"

const Gallery = () => {

    const data = useStaticQuery(graphql`
        query getGallery {
            allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
                nodes {
                    childImageSharp {
                        gatsbyImageData
                        id
                    }
                    id
                }
            }
        }
    `)

    const images = data.allFile.nodes
    //console.log(images)

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>Gallery</h2>
                <div className={styles.galleryWrapper}>
                    {images.map(img => {
                        return (
                            <GatsbyImage
                                key={img.childImageSharp.id}
                                image={img.childImageSharp.gatsbyImageData}
                                alt="women's jacket image"
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )

}

export default Gallery