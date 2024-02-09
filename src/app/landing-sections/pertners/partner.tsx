import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Partner = () => {
  return (
    <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold'>Our customers and Partners</h1>
        <div className='grid grid-cols-3 gap-4 p-10'>
            <Link href={'https://page-conseil.com/'} className='animate:pin hover:text-red-700'><Image src='/images/' alt='ksksksl' width={200} height={200}/> </Link>
            <Link href={'https://www.afrilandfirstbank.com/?lan=en'} className='hover:text-red-700'><Image src='/images/afriland.jpeg' alt='ksksksl' width={200} height={200}/> </Link>
            <Link href={'https://kion.co.za/'} className='hover:text-red-700'><Image src='/images/kionConsulting.png' alt='ksksksl' width={200} height={200}/> </Link>
            

        </div>

    </div>
    
  )
}

export default Partner