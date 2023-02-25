import React from 'react'

import BackGround from './BackGround'
import Weather from './Weather'
import Clock from './Clock'


export default function App() {


  return (
    <main className='main'>
      <BackGround />
      <Weather />
      <Clock />
    </main>
  )
}
