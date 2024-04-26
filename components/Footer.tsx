import {   InstagramIcon, LinkedinIcon, Mail, Phone, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='h-60 w-[90%] p-5 flex justify-between my-10'>
        

<div className=' w-72 flex flex-col justify-around'>

<Image src="/logo.png" width={150} height={30} alt='logo' />
<p className='text-wrap'>Convenience: They handle the logistics and planning of trips, saving time and effort for the traveller</p>

<div className='flex justify-around'>
    <InstagramIcon/>
    <TwitterIcon/>
    <LinkedinIcon/>
    <YoutubeIcon/>
</div>

</div>


<div className='flex flex-row justify-between gap-10'>
    <div className='flex flex-col gap-7'>
        <h1 className='text-xl font-semibold' >About</h1>
        <h2>About Us</h2>
        <h2>Features</h2>
        <h2>News & Blog</h2>
    </div>
    <div className='flex flex-col gap-7'>
        <h1 className='text-xl font-semibold'>Movement</h1>
        <h2>What Travels</h2>
        <h2>Support Us</h2>
        
    </div>
    <div className='flex flex-col gap-7'>
        <h1 className='text-xl font-semibold'>Company</h1>
        <h2>What Travels</h2>
        <h2>Capital</h2>
        <h2>Security</h2>
    </div>
    <div className='flex flex-col gap-7'>
        <h1 className='text-xl font-semibold'>Support</h1>
        <h2>FAQ</h2>
        <h2>Support Center</h2>
        <h2>Contact Us</h2>
    </div>
    <div className='flex flex-col gap-7'>
        <h1 className='text-xl font-semibold'>Contact</h1>
        <h2 className='flex gap-2'> < Phone/> 7302083292  </h2>
        <h2 className='flex gap-2'><Mail/>anshulwallahtravel@gmail.com </h2>
        <h2>News & Blog</h2>
    </div>
</div>
    </div>
  )
}

export default Footer