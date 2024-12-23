import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { data } from "@/data/data"
import { Card, CardContent } from '@mui/material'
import DownloadButton from './DownloadButton'
import { Meteors } from './ui/meteors'
const Resume = () => {
    return (
        <section id='resume' className='relative md:my-20 my-10'>
            <div className='max-w-[92%] mx-auto'>
                <div className='text-center'>
                    <h2 className='z-[-1] absolute top-0 left-0 right-0 md:text-8xl text-trans'>Resume</h2>
                    <h2 className='text-3xl md:text-5xl'>Resume</h2>
                    <p className='max-w-[95%] md:max-w-[76%] mx-auto mt-6 md:mt-10 text-gray-400 text-sm md:text-base'>Skilled Frontend Developer with expertise in building responsive and user-friendly web applications using HTML, CSS, JavaScript, and modern frameworks like React and Next.js.</p>
                </div>
                <div className='text-center mt-10 md:mt-16'>
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-2 md:-ml-4"  >
                            {
                                data.map((curr) => {
                                    return (
                                        <CarouselItem key={curr.id} className="pl-1 md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                                            <div className="p-1" >
                                                <Card className='bg-transparent text-white'>
                                                    <CardContent className="flex flex-col  items-center justify-center py-3  md:h-[300px] h-[300px]">
                                                        <div className="w-full h-full relative">
                                                            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start ">
                                                                <span className='text-yellow-500 text-xl font-bold'>{curr.date}</span>
                                                                <h3 className='text-3xl md:text-4xl mt-4'>{curr.name}</h3>
                                                                <p className='mt-4 text-gray-400 text-sm md:text-base'>{curr.description}</p>
                                                                <Meteors number={20} />
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    )
                                })
                            }
                        </CarouselContent>
                    </Carousel>
                </div>
                <DownloadButton className={`text-center mt-8`} />
            </div>
        </section>
    )
}

export default Resume