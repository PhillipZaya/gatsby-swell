import React, {useState} from 'react'
import { Link } from 'gatsby'

const Header = () => {
    const [show,setShow] = useState(false)
  return (
    <nav className='navbar'>
    <div className='nav-center'>
      <div className='nav-header'>
<Link to='/'>
<h1>Barney</h1>
</Link>
<button className='nav-btn' onClick={()=> setShow(!show)}>
</button>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
        <Link to='/' className='nav-link' activeClassName='active-link' onClick={()=> setShow(false)}>home</Link>
        <Link to='/DogBeds' className='nav-link' activeClassName='active-link' onClick={()=> setShow(false)}>DogBeds</Link>
        <Link to='/Blankets' className='nav-link' activeClassName='active-link' onClick={()=> setShow(false)}>Blankets</Link>
        <Link to='/about' className='nav-link' activeClassName='active-link' onClick={()=> setShow(false)}>about</Link>
        <Link to='/contact' className='nav-link' activeClassName='active-link' onClick={()=> setShow(false)}>contact</Link>
        <div className='nav-link contact-link'>
        <Link to='/login' className='btn'>Login</Link>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Header