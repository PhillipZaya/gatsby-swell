import * as React from "react"
import Layout from "../components/Layout"
import {StaticImage} from 'gatsby-plugin-image'

export default function Home() {
  return (
  <Layout>
    <main className='page'>
      <header className='hero'>
   <StaticImage
   src='../assets/images/BarneyBedShoot_compilation_L_1728x.jpg'
          alt='eggs'
          className='hero-img'
          placeholder='tracedSVG'
          layout='fullWidth'
  ></StaticImage>
  <h1>Products</h1>
  </header>
  </main>
  </Layout>
  )
}