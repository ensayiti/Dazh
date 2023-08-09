'use client'

import { Navbar } from 'flowbite-react';
import { Code2, LogIn } from 'lucide-react'

export default function NavBar() {
    return (
        <Navbar fluid className='bg-foreground'>
            <Navbar.Brand href='/'>
                <Code2 className='text-primary-foreground mr-2 h-6 sm:h-9' />
                <span className='text-primary-foreground self-center whitespace-nowrap text-xl font-semibold'>Dazh</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href='#feature'>
                    <p className='text-primary-foreground hover:text-muted-foreground transition duration-300'>Feature</p>
                </Navbar.Link>
                <Navbar.Link href="/sign-in">
                    <p className='text-primary-foreground hover:text-muted-foreground transition duration-300'>Login <LogIn className='inline-flex' /></p>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}