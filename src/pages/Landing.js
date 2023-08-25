import React from 'react'
import { Logo, ParticlesContainer } from '../components'
import main from '../assets/images/bg-explosion.png'
import { Link } from 'react-router-dom';
import topLeftImage from '../assets/images/top-left-img.png'
import avatar from '../assets/images/avatar.png'
import { motion } from 'framer-motion';


const Landing = () => {
  return (
    <main className='landing-page'>
      <ParticlesContainer/>

      <div className='top-left-img'>
        <img src={topLeftImage} alt="" />
      </div>

      <div className='container-landing-page'>
        <nav className='nav-logo'>
          <Logo />
        </nav>
        <motion.div
          className='landing-info'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to='/register' className='btn-login'>
            Login/Register
          </Link>
        </motion.div>

      </div>
      <div className='main-image'>
        <img src={main} alt="" />
      </div>

      <div className='avatar-image'>
        <motion.img
          src={avatar}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </div>

    </main>
  )
}

export default Landing