import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import MainHero from '../../components/mainHero/MainHero'
import AlgorithmSelector from '../../components/algorithmselector/AlgorithmSelector'

function Main() {
  return (
    <div className='main'>
        <Navbar />
        <MainHero />
        <AlgorithmSelector />
    </div>
  )
}

export default Main