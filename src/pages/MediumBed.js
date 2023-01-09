import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const MediumBed = () => {
  return (
    <Layout>
    <StaticImage src='../assets/images/M.jpg' alt='pic' />
    <h3>Medium Bareny Bed</h3>
    <h4>$199.00</h4>
    <Link to='/Cart'>
    <button type='submit'>Buy Now</button>
    </Link>
    </Layout>
  )
}

export default MediumBed