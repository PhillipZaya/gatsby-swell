import React from 'react'
import Layout from '../components/Layout'

const Cart = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
          <h3>Products</h3>
          </article>
          <article>
            <form className='form contact-form'>
            <button type='submit' className='btn block'>Checkout</button>
            </form>
          </article>
        </section>
          <section className='featured-recipes'>
        </section>
      </main>
    </Layout>
  )
}

export default Cart