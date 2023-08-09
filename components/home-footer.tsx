import { ExternalLink } from "lucide-react";

export function HomeFooter() {
    return (
        <footer className="bg-foreground">
            <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
                <span className="text-sm font-semibold text-muted-foreground sm:text-center">© 2023 <a href="https://ensayiti.com" className="hover:text-primary-foreground transition duration-300">ensayiti</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-muted-foreground sm:mt-0">
                    <li>
                        <a href="https://www.ensayiti.com/about" className="mr-4 hover:text-primary-foreground transition duration-300 md:mr-6 ">About <span className="inline-flex w-4 h-4 ml-2 justify-center items-center align-middle"><ExternalLink /></span></a>
                    </li>
                    <li>
                        <a href="https://www.ensayiti.com/contact" className="hover:text-primary-foreground transition duration-300">Contact <span className="inline-flex w-4 h-4 ml-2 justify-center items-center align-middle"><ExternalLink /></span></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}