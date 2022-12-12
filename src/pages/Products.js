import React from 'react'
import Layout from '../components/Layout'
import AllProducts from '../components/AllProducts'

const Products = () => {
  return (
    <Layout>
        <main className='page'>
            <AllProducts />
        </main>
    </Layout>
  )
}

export default Products