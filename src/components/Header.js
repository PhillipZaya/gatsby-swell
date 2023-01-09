import React, {useState} from 'react'
import { Link } from 'gatsby'

const Header = () => {
    const [show,setShow] = useState(false)
  return (
    <nav className='navbar'>
      <div className='nav-center'>
      <div className='nav-header'>
<Link to='/'>
<img src="https://cdn.shopify.com/s/files/1/0092/3136/8270/files/barneylogo_180x.png?v=1613738791" alt='Barney logo' />
</Link>
</div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
        <Link to='/' className='nav-link' activeClassName='active-link' onClick={()=> setShow(false)}>home</Link>
        <Link to='/MediumBed' className='nav-link' activeClassName='active-link' onClick={()=> setShow(false)}>MediumBed</Link>
        <Link to='/About' className='nav-link' activeClassName='active-link' onClick={()=> setShow(false)}>about</Link>
        <Link to='/Contact' className='nav-link' activeClassName='active-link' onClick={()=> setShow(false)}>contact</Link>
        <div className='nav-link contact-link'>
        <Link to='/Login' className='btn'>Login/Register</Link>
        </div>
        <div className='nav-link contact-link'>
        <Link to='/Cart' className='btn'>Cart</Link>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Header