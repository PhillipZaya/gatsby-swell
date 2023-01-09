import React from 'react'
import ProductsList from './ProductsList'
import TagsList from './TagsList'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
query {
  swelltest {
   products{
    results{
      images{
        id
        file{
          url
        }
      }
      name
      price
      purchaseOptions{
        standard{
          price
        }
        subscription{
          plans{
            price
          }
        }
      }
    }
  }
  }
}
`

const AllProducts = () => {
  const data = useStaticQuery(query);
  const products = data.swelltest.products.results
  return (
    <section className='recipes-container'>
      <h4>Products</h4>
      <TagsList products={products} />
      <ProductsList products={products} />
    </section>
  )
}

export default AllProducts