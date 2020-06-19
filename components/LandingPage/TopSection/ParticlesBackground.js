// import { useEffect } from 'react'
import ParticlesBg from 'particles-bg'

const ParticlesBackground = () => {
  // let use
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const ParticlesBg = require('particles-bg')
  //     use = <ParticlesBg type="cobweb" bg={true} />
  //   }
  // }, [])

  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" />
    </div>
  )
}

export default ParticlesBackground
