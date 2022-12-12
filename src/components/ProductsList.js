import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProductsList = ({products = []}) => {
  return (
    <div className='recipes-list'>
        {products.map(product => {
            const {id, name, price, images, purchaseOption, subscription} = product
            // const pathToImage = getImage(images)

            return (
            <div>
            <Link key={id} to={`/${name}`} className="recipe">
                <div>{images.map(image => {
                  return (<div key={image.id}>
                    <img width={300} height={200}src={image.file.url}/>
                  </div>)
                 })}</div>
                <h5>{name}</h5>
                <h6>{price}</h6>
                <h6>{purchaseOption}</h6>
                <h6>{subscription}</h6>
            </Link> 
            </div>
        )})}




    </div>
  )
}

export default ProductsList