/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
const Banner = () => {
    return (
        <section id='home' className='pt-48 bg-bannerImg md:bg-contain bg-cover bg-no-repeat md:bg-left-20-bottom-90 md:bg-right-10-bottom-0 h-[100vh] md:h-[140vh] bg-center' >
            <div className='max-w-[96%] md:max-w-[92%] mx-auto'>
                <div className='flex justify-between'>
                    <div className='w-full md:text-start text-center mt-12 md:mt-0 slide-top' >
                        <span className='text-sm text-yellow-500 ml-1'>HELLO!</span>
                        <h1 className=' md:max-w-[50%] text-6xl mt-6 leading-tight font-extrabold'>Fast, Reliable, and Secure <span className='text-yellow-500'>Web Solutions</span></h1>
                        <div className='flex items-center gap-2 mt-4 justify-center md:justify-start'>
                            <button className='text-sm text-black w-[110px] h-[50px] p-2 bg-yellow-500 rounded-3xl font-semibold'><Link href="/about">Hire Me</Link></button>
                            <button className='text-sm text-white w-[130px] h-[50px] p-2 bg-transparent border border-white rounded-3xl'><Link href="/project">My Work</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner