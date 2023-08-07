import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import TeamSwitcher from "@/components/team-switcher";
import { UserNav } from "@/components/user-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard app using Next"
}

export default function Dashboard() {
    return (
        <>
            <div className="hidden flex-col md:flex">
                <div className="border-b bg-foreground dark:bg-foreground">
                    <div className="flex h-16 items-center px-4">
                        <TeamSwitcher />
                        <MainNav className="mx-6" />
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}