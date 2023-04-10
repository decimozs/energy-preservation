import React from 'react'
import { Archivo } from 'next/font/google'
import { Header } from '../shared'

const font = Archivo ({ subsets : ['latin'] })

interface LayoutProps {
    children : React.ReactNode
}

const Layout: React.FC <LayoutProps> = ({children}) => {
  return (
    <main className='p-[1rem] w-full h-full m-auto text-[1rem] xl:pr-0' id={font.className}>
      <Header/>
        {children}
    </main>
  )
}

export default Layout