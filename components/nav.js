import Link from 'next/link'
import { useEffect } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import {useTheme} from 'next-themes'



export default function Nav() {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        console.log('Made with love by Sahiti Dasari. All Rights Reserved.')
    })
    return (
        <nav className="dark:text-white">
        </nav>
    );
}