import React from 'react'
import ImageReveal from './ImageReveal'
import AnimatedText from '@/app/components/AnimatedText'
function History() {
    return (
        <div className=' min-h-screen w-screen flex justify-center bg-[#D6AB5D] items-center '>
            <div className=' px-5 max-w-[1442px] w-full grid grid-cols-12'>
                <div className=' md:col-span-4 md:col-start-1 col-span-12'>
                    <ImageReveal
                        url={'/media/GBI01691.jpg'}
                        className='  overflow-hidden rounded-md w-auto mt-5 md:mt-0 h-[70vh] md:w-[20vw] md:h-[70vh] max-w-[474px]' /> {/**w-[530px] h-[660px] */}
                </div>


                <div className='md:col-span-8 pl-0 mt-5 md:mt-0 md:pl-10 text-[#231F20] md:col-start-5 col-span-12 flex justify-start flex-col items-start '>
                    <div className=' max-w-xl '>
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
                                    Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                    <br />
                                    Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                                    Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                                </p>
                            </AnimatedText>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default History