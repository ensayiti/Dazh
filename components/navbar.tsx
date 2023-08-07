'use client'

import { Navbar } from 'flowbite-react';
import { Button } from '@/components/ui/button';
import { Code2 } from 'lucide-react'

export default function NavBar() {
    return (
        <Navbar fluid rounded className='border-b border-border'>
            <Navbar.Brand href='https://flowbite-react.com'>
                <Code2 className='mr-2 h-6 sm:h-9' />
                <span className='self-center whitespace-nowrap text-xl font-semibold'>Flowbite React</span>
            </Navbar.Brand>
            <div className='flex md:order-2'>
                <Button>Get Started</Button>
            </div>
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
                <Navbar.Link href="#">
                    <p className='text-primary hover:text-muted-foreground transition duration-300'>Contact</p>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}