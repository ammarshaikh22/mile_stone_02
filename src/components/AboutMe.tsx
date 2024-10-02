"use client"
import DownloadButton from "./DownloadButton";
import aboutImg from "/public/banner.png"
import Image from "next/image"
const AboutMe = () => {
    return (
        <section id="about" className='relative my-28 h-auto'>
            <div className='max-w-[92%] mx-auto'>
                <div className='flex items-center justify-end gap-24'>
                    <div className='md:block hidden absolute -top-36 left-20'>
                        <Image src={aboutImg} alt='img' />
                    </div>
                    <div className='md:max-w-[50%] max-w-[95%] w-full relative'>
                        <h2 className='z-[-1] absolute top-0 left-0 right-0 md:text-8xl text-trans'>About</h2>
                        <h2 className='text-3xl md:text-5xl'>About Me</h2>
                        <p className='mt-6 md:mt-10 md:max-w-[90%] text-gray-400'>Hello! I am Front End Developer. I have one year of experience in Web Development.</p>
                        <div className='mt-8 md:mt-12 w-auto flex gap-6 md:gap-10'>
                            <ul className='text-sm md:text-base flex flex-col gap-5 items-start max-w-[30%]'>
                                <li className='font-bold'>Name:</li>
                                <li className='font-bold'>Date of birth:</li>
                                <li className='font-bold'>Address:</li>
                                <li className='font-bold'>Zip code:</li>
                                <li className='font-bold'>Email:</li>
                                <li className='font-bold'>Phone:</li>
                            </ul>
                            <ul className='flex flex-col gap-4 text-sm md:text-base max-w-[70%]'>
                                <li className='text-gray-400'>Muhammad Ammar Shaikh</li>
                                <li className='text-gray-400'>October 22,2006</li>
                                <li className='text-gray-400'>Flat A-10 Pyramid Plaza, Yaseenabad, Karachi Sindh, Pakistan</li>
                                <li className='text-gray-400'>74000</li>
                                <li className='text-gray-400'>ammarshaikh50099@gmail.com</li>
                                <li className='text-gray-400'>+923162324240</li>
                            </ul>
                        </div>
                        <p className='mt-10 text-xl'><span className='text-yellow-500'>10 </span>Project Complete</p>
                        <DownloadButton />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe