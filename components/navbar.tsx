'use client'

import { Code, Code2, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="navbar bg-foreground border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary-foreground rounded-box w-52">
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                        <li>
                            <Link href='/feature'>Feature</Link>
                        </li>
                        <li>
                            <Link href='/pricing'>Pricing</Link>
                        </li>
                    </ul>
                </div>
                <a className='inline-flex justify-center items-center text-primary-foreground text-xl font-semibold'><Code2 className='w-6 h-6 mr-2' />Dazh</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2 text-primary-foreground">
                    <li className='hover:bg-primary-foreground rounded-lg transition duration-300'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='hover:bg-primary-foreground rounded-lg transition duration-300'>
                        <Link href='/feature'>Feature</Link>
                    </li>
                    <li className='hover:bg-primary-foreground rounded-lg transition duration-300'>
                        <Link href='/pricing'>Pricing</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Button size='sm' variant='secondary' className='transition duration-300' asChild>
                    <Link href='/sign-in'>
                        Sign In <LogIn className='w-5 h-5 ml-2' />
                    </Link>
                </Button>
            </div>
        </div>
    )
}