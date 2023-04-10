import React from 'react'
import { Playfair_Display } from 'next/font/google'

const headerFont = Playfair_Display({ subsets: ['latin-ext']})

const Header: React.FC = () => {
  return (
    <header>
        <p className={headerFont.className}>
            Environmental Preservation
        </p>
    </header>
  )
}

export default Header