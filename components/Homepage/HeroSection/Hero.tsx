import { useEffect, useMemo, useState } from 'react'
import HeroContent from './HeroContent'
import Image from 'next/image';

const Hero = () => {
  const myObj = useMemo(() => {
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

  const { title, img, textColor } = myObj[currentIndex]

  return (
    <>
      <div className='m-auto relative max-w-7xl'>
        <HeroContent title={title} img={img} textColor={textColor} />
      </div>
      <Image className='w-full object-cover h-[300px] sm:h-full' src={`/images/herosection/${img}`} width={1600} height={900} alt="" />
    </>
  )
}

export default Hero