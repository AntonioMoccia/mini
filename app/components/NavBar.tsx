import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <header className=' h-24 w-screen fixed top-0 left-0 z-50'>
        <nav className=' w-full h-full px-10'>
            <div className='flex justify-between h-full items-center'>
                <div>
                    <Image 
                        width={30}
                        height={30}
                        alt="logo"
                        src={'/media/logo.svg'}
                    />
                </div>

                <div>
                    <div className='md:hidden block'>
                        Menu
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </nav>
    </header>
  )
}

export default NavBar