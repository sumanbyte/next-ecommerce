import { useEffect, useMemo, useState } from 'react'
import HeroContent from './HeroContent'

const Hero = () => {
  const myObj = useMemo(()=> {
    return [
      {
        title: 'Premium Electronics',
        img: 'hero1.jpg',
        textColor: 'text-primary-100'
      },
      {
        title: 'Newest Clothing',
        img: 'hero2.jpg',
        textColor: 'text-primary-100'
      },
      {
        title: 'Gift for Kids',
        img: 'hero3.jpg',
        textColor: 'text-black'
      },
      {
        title: 'Outstanding Artworks',
        img: 'hero4.jpg',
        textColor: 'text-black'
      },
    ]
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(()=> {
    
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = (currentIndex + 1) % myObj.length;
      setCurrentIndex(nextIndex)
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);

  }, [currentIndex, myObj.length])

  const {title, img, textColor} = myObj[currentIndex]

  return (
    <div className='m-auto relative'>
      <HeroContent title={title} img={img} textColor={textColor}/>
    </div>
  )
}

export default Hero