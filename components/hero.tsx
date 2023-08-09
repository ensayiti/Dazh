import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="bg-foreground">
            <div className="py-24 px-4 mx-auto max-w-screen-xl text-center lg:py-44 lg:px-12">
                <h1 className="text-primary-foreground mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-7xl lg:text-8xl">Dazh fast, work precisely.</h1>
                <p className="text-primary-foreground mb-8 text-lg font-normal text-mute-foreground lg:text-xl sm:px-16 xl:px-48">Dazh is an admin dashboard design built for ease of data collection in any field accompanied by a user-friendly and of course aesthetic interface.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Button size='lg' className="px-5 font-semibold text-xl">More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </div>
        </section>
    )
}