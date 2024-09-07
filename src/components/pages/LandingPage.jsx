import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Main } from '../main/Main'
import { Footer } from '../footer/Footer'
import "./LandingPageWrapper.css"

export const LandingPage = () => {
  return (
    <div className='landing-page-wrapper'>
        <Navbar />
        <Main />
        <Footer />
    </div>
  )
}
