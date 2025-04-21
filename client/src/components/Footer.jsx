import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer class="footer footer-center pt-5 pb-0 bg-red-600 text-base-content rounded">
  <div class="grid grid-flow-col gap-10 pt-3 text-black text-xl">
    <Link class="link link-hover" to={`/about`}>About us</Link> 
    <Link class="link link-hover" to={`/contact`}>Contact</Link> 
   
  </div> 
 
  <div className='text-black pb-3 pt-0 bg-red-600'>
    <p><p>© 2025 <strong>Sunny Kavar</strong>. All rights reserved.</p>
    </p>
  </div>
</footer>

  )
}

export default Footer
