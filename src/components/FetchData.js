import React from 'react'
import {useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
query {
  swelltest {
   products{
    results{
      images{
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
}`
const FetchData = () => {
  const data = useStaticQuery(getData);
// console.log(useStaticQuery(getData));
  return (
    <div>
     <h1>Name : {data.swelltest.products.results.name}</h1>
    </div>
  )
}

export default FetchData