import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect'

const Hero = () => {
    const words = [
        { text: 'It'},
        { text: 'Feels'},
        { text: 'Like'},
        { text: 'I\'m'},
        { text: 'Being'},        
        { text: 'Watched...'},
    ]
    return (
    <div className="h-screen w-full pb-20 pt-36">
        <div>
            <img
                src="/image/fearful-yarn.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <TypewriterEffect words={words}/>
        </div>
    </div>
  )
}

export default Hero