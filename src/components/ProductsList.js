import React from 'react'
import { Link } from 'gatsby'

const ProductsList = ({products = []}) => {
  return (
    <div className='recipes-list'>
        {products.map(product => {
            const {id, name, price, images} = product

            return (
            <div>
            <Link key={id} to='/MediumBed' className="recipe">
                <div>{images.map(image => {
                  return (<div key={image.id}>
                    <img width={300} height={200}src={image.file.url}/>
                  </div>)
                })}</div>
                <h5>{name}</h5>
                <h6>{price}</h6>
            </Link> 
            </div>
        )})}




    </div>
  )
}

export default ProductsList