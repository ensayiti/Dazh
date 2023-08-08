import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="border-b border-border">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-secondary bg-primary rounded-full" role="alert">
                    <span className="text-xs bg-primary-foreground rounded-full text-primary px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Dazh is out! Feel the different</span>
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary md:text-5xl lg:text-6xl">Dazh fast, work precisely.</h1>
                <p className="mb-8 text-lg font-normal text-mute-foreground lg:text-xl sm:px-16 xl:px-48">Dazh is an admin dashboard design built for ease of data collection in any field accompanied by a user-friendly and of course aesthetic interface.</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Button size='lg' className="px-5">Learn <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>

                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-24">
                    <span className="font-semibold text-muted-foreground uppercase">FEATURED IN</span>
                    <div className="flex flex-wrap justify-center items-center mt-8 text-primary sm:justify-between">
                        <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-muted-foreground transition duration-300">
                            <svg className="h-11" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path d="M14.537 10.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.339.025-1.769-.794-3.3-.794s-2.009.769-3.275.82c-1.316.049-2.317-1.318-3.158-2.532C1.323 14.984.01 10.451 1.772 7.391a4.9 4.9 0 0 1 4.139-2.507c1.292-.025 2.511.869 3.3.869.789 0 2.271-1.075 3.828-.917A4.67 4.67 0 0 1 16.7 6.82a4.524 4.524 0 0 0-2.161 3.805M12.02 3.193A4.4 4.4 0 0 0 13.06 0a4.482 4.482 0 0 0-2.946 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                            </svg>
                        </a>
                        <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-muted-foreground transition duration-300">
                            <svg className="h-11" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path d="M14 19v-5h2v6.988H0V14h1.98v5H14Z" />
                                <path d="m3.84 13.522 8.73 1.825.369-1.755-8.73-1.825-.369 1.755ZM4.995 9.2l8.083 3.763.739-1.617L5.734 7.56 4.995 9.2Zm3.372-5.482L7.235 5.08l6.859 5.704 1.132-1.362-6.859-5.704ZM12.57 16H3.655v2h8.915v-2ZM9.861 2.111l6.193 6.415 1.414-1.415-6.43-6.177-1.177 1.177Z" />
                            </svg>
                        </a>
                        <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-muted-foreground transition duration-300">
                            <svg className="h-11" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                                <path d="M3 5.012H0V15h3V5.012Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}