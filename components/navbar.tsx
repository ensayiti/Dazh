'use client'

import { Navbar } from 'flowbite-react';
import { Code2, LogIn } from 'lucide-react'

export default function NavBar() {
    return (
        <div className='container'>
            <Navbar fluid rounded className='border-b border-border'>
                <Navbar.Brand href='/'>
                    <Code2 className='mr-2 h-6 sm:h-9' />
                    <span className='self-center whitespace-nowrap text-xl font-semibold'>Flowbite React</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href='#'>
                        <p className='text-primary hover:text-muted-foreground transition duration-300'>Home</p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <p className='text-primary hover:text-muted-foreground transition duration-300'>About</p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <p className='text-primary hover:text-muted-foreground transition duration-300'>Services</p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <p className='text-primary hover:text-muted-foreground transition duration-300'>Pricing</p>
                    </Navbar.Link>
                    <Navbar.Link href="/sign-in">
                        <p className='text-primary hover:text-muted-foreground transition duration-300'>Login <LogIn className='inline-flex' /></p>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}