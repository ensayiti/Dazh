import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="border-b border-border">
            <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-secondary bg-primary rounded-full" role="alert">
                    <span className="text-xs bg-primary-foreground rounded-full text-primary px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Dazh is out! Feel the different</span>
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary md:text-5xl lg:text-6xl">Dazh fast, work precisely.</h1>
                <p className="mb-8 text-lg font-normal text-mute-foreground lg:text-xl sm:px-16 xl:px-48">Dazh is an admin dashboard design built for ease of data collection in any field accompanied by a user-friendly and of course aesthetic interface.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Button size='lg' className="px-5">Learn <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </div>
        </section>
    )
}