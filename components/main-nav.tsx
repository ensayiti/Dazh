import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
            <Link href="#" className="text-sm font-medium text-primary-foreground transition-colors hover:text-muted-foreground">Overview</Link>
            <Link href="#" className="text-sm font-medium text-primary-foreground transition-colors hover:text-muted-foreground">Customers</Link>
            <Link href="#" className="text-sm font-medium text-primary-foreground transition-colors hover:text-muted-foreground">Products</Link>
            <Link href="#" className="text-sm font-medium text-primary-foreground transition-colors hover:text-muted-foreground">Settings</Link>
        </nav>
    )
}