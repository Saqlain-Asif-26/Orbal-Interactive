import React from 'react'

function Footer() {
  return (
    <section>
        <div className="w-full bg-[#05060f] py-20 md:py-28">
            <div className="bg-linear-to-br from-[#38bdf8] to-[#4f46e5] p-8 md:p-12 rounded-3xl shadow-2xl max-w-[90%] mx-auto text-center md:text-start md:flex justify-between items-center gap-10">
                <div className='w-full mb-4 md:mb-0 md:w-[85%]'>
                    <h1>Let's begin with a conversation that leads to results.</h1>
                    <p>Discover how Orbal Interactive Services can help your business reduce complexity, improve system performance, and support lasting growth — one smart solution at a time.</p>
                </div>
                <button className="cursor-pointer w-fit bg-[#21f3d6] hover:bg-[#1cdbc1] text-[#05060f] font-bold py-3 px-8 rounded-xl text-sm transition-colors text-nowrap">
                    Let's chat
                </button>
            </div>
        </div>
        <div className='flex flex-col items-center py-4'>
            <img className='cursor-pointer' src="/Orbal-Interactive/images/logo.png" alt="logo" />
            <div className='w-full pt-4 px-8 md:px-12 text-center md:text-start md:flex justify-between'>
                <p><span className='font-bold'>Address:</span> XCOMPANYADDRESSX</p>
                <p className='py-2 md:py-0'>© 2025 Orbal Interactive, All Rights Reserved</p>
                <p><span className='font-bold'>Email:</span> XCOMPANYEMAILX</p>
            </div>
        </div>
    </section>
  )
}

export default Footer