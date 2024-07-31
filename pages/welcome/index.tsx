import React, { useEffect } from 'react'

const WelcomePage = () => {
  useEffect(()=> {
    sessionStorage.removeItem("email");
  }, [])
  return (


    <div className='max-w-7xl w-full lg:ml-8 ml-4 m-auto'>
        <h1 className='text-center text-3xl mt-10 font-bold'>Your account has been verified successfullly.</h1>
        <h2 className='text-xl'>Please login to continue</h2>
        
    </div>
  )
}

export default WelcomePage