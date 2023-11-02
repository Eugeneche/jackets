import React, { useState, useEffect } from "react"
//import getStripe from "../utils/stripejs"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import useTranslations from "../components/useTranslations"
import * as styles from "./pages.module.scss"

const OrderPage = ({data}) => {
  
  const { 
    choose_color,
    choose_size
  } = useTranslations()

  const [ color, setColor ] = useState('brown')
  const [ size, setSize ] = useState('l')
  const [ currentProduct, setCurrentProduct] = useState({})

  const allProducts = data.allStripePrice.nodes

  useEffect(() => {
    allProducts.forEach(({product}) => {
      (product.metadata.size === size && product.metadata.color === color) && setCurrentProduct(product)
    })
  })

  return (
    <>
      <div className={styles.container}>
        <h1>Order Page</h1>
        <p>Welcome to Order Page</p>
        <div className={styles.chooseProduct}>

          <div>
            <img className={styles.productImage} src={currentProduct.images} alt={currentProduct.name}></img>
          </div>

          <div className={styles.control}>
            <h3>{currentProduct.name}</h3>
            <label>
              {choose_color}:
              <select
                value={color} 
                onChange={e => setColor(e.target.value)} 
              >
                <option value="black">černá / black</option>
                <option value="brown">hnědá / brown</option>
              </select>
            </label>

            <label>
              {choose_size}:
              <select
                value={size}
                onChange={e => setSize(e.target.value)}
              >
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
              </select>
            </label>

            <h4>{currentProduct?.metadata?.price}</h4>

            <a href={currentProduct?.metadata?.plink} target="_blank" rel="noreferrer">
              <button>Continue</button>
            </a>
            
          </div>
        </div>
      </div>
    </>
  )
}

export const Head = () => <Seo title="Order Page" />

export default OrderPage

export const query = graphql`
query getProducts {
  allStripePrice(filter: {product: {metadata: {category: {eq: "wear"}}}}) {
    nodes {
      product {
        id
        name
        images
        metadata {
          size
          color
          price
          plink
        }
      }
    }
  }
}
`
