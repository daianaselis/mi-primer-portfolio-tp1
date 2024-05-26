import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='container footer'>
      <div className='row'>
        <div className='col  animate__animated animate__bounce' >
         Contactame!
         </div>
         <div className='col enlaces animate__animated animate__bounce' >
          <a href="https://www.linkedin.com/in/daiana-betsab%C3%A9-selis-3639a1222/"><i class="bi bi-linkedin"></i></a>
          <a href="https://www.facebook.com/profile.php?id=61560186530579"><i class="bi bi-facebook"></i></a>
          <a href="https://github.com/daianaselis"><i class="bi bi-github"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
