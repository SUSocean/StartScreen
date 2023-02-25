import React from 'react'

import Weather from './Weather'


export default function App() {

  const [backgroundPicture, setBackgroundPicture] = React.useState()

  React.useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=&nt=1&client_id=Aa4kyolAtHfU5RSmI6ttF9F-KYV7JpF4pjX74OwEhHk')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBackgroundPicture(() => (data.urls.regular))
      })
  }, [])
  return (
    <div>
      <Weather />
      <img src={backgroundPicture} alt="picture" width='300px' />
    </div>
  )
}

// 'https://api.unsplash.com/photos/random?client_id=Aa4kyolAtHfU5RSmI6ttF9F-KYV7JpF4pjX74OwEhHk'
// /topics/wallpapers /