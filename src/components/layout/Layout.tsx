import React from 'react'
import { Archivo } from 'next/font/google'

const font = Archivo ({ subsets : ['latin'] })

interface LayoutProps {
    children : React.ReactNode
}

const Layout: React.FC <LayoutProps> = ({children}) => {
  return (
    <main className='' id={font.className}>
        {children}
    </main>
  )
}

export default Layout