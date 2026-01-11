import React from 'react'
import ImageReveal from './ImageReveal'
import AnimatedText from '@/app/components/AnimatedText'

//bg-[#D6AB5D] url="/media/GBI01691.jpg"

function History() {
    return (

        <div className='px-5 md:pb-10 mb-10 w-screen h-screen flex bg-[#D6AB5D] justify-center items-center flex-col'>
            <div className='  w-full h-full max-w-[1442px] flex justify-center items-center'>
                <div className=' w-full grid grid-cols-12  '>

                    <div className='md:col-span-8 md:col-start-1 col-span-12 flex justify-start items-center '>
                        <div className=' max-w-lg'>
                            <div className='w-full '>
                                <AnimatedText>
                                    <h1 className=' md:text-4xl text-xl font-bold'>
                                      LA NOSTRA STORIA
                                    </h1>
                                </AnimatedText>
                            </div>
                            <div className='w-full '>
                                <AnimatedText>
                                    <p>
                                        
                                    </p>
                                </AnimatedText>
                            </div>
                        </div>
                    </div>

                    {/** IMAGE */}
                    <div className="col-span-12 md:col-span-4 md:col-start-9 flex justify-center md:justify-end">
                        <ImageReveal
                           url="/media/GBI01691.jpg"
                            className="relative overflow-hidden rounded-md w-full max-w-none md:max-w-[474px] aspect-[4/5] sm:aspect-[3/4] mt-8 md:mt-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
