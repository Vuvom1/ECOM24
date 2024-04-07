import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/Euro2024.mp4" autoPlay loop muted />
        <h1>UEFA EURO 2024 IS COMING</h1>
        <p>Are you ready?</p>
        <div className='hero-btns'>
            <Button
                className='btns'
                buttonSize='btn--large'
                buttonStyle='btn--outline'
            >
                GET STARTED
            </Button>

            <Button
                className='btns'
                buttonSize='btn--large'
                buttonStyle='btn--primary'
            >
                WATCH TRAILER <FontAwesomeIcon icon={faCirclePlay} />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
