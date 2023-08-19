import PageShell from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { UserNav } from "@/components/user-nav";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard app using Next"
}

export default function Dashboard() {
    return (
        <>
            <div className="navbar bg-foreground border-b">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-primary-foreground lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-foreground rounded-box w-56">
                            <li className="text-primary-foreground hover:bg-primary-foreground">
                                <Link href='/'>Dashboard</Link>
                            </li>
                            <li tabIndex={0} className="text-primary-foreground hover:bg-primary-foreground">
                                <details>
                                    <summary>Orders</summary>
                                    <ul className="p-2">
                                        <li><a>Add Order</a></li>
                                        <li><a>Order List</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li tabIndex={0} className="text-primary-foreground hover:bg-primary-foreground">
                                <details>
                                    <summary>Customers</summary>
                                    <ul className="p-2">
                                        <li><a>Add Customer</a></li>
                                        <li><a>List Customer</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <Button variant='ghost' size='sm' className="normal-case text-lg text-primary-foreground">Dazh</Button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-primary-foreground hover:bg-primary-foreground rounded-lg">
                            <Link href='/'>Dashboard</Link>
                        </li>
                        <li tabIndex={0} className="text-primary-foreground hover:bg-primary-foreground rounded-lg">
                            <details>
                                <summary>Orders</summary>
                                <ul className="p-2">
                                    <li className="text-foreground"><a>Add Order</a></li>
                                    <li className="text-foreground"><a>Order List</a></li>
                                </ul>
                            </details>
                        </li>
                        <li tabIndex={0} className="text-primary-foreground hover:bg-primary-foreground rounded-lg">
                            <details>
                                <summary>Customers</summary>
                                <ul className="p-2">
                                    <li className="text-foreground"><a>Add Customer</a></li>
                                    <li className="text-foreground"><a>List Customer</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <UserNav />
                </div>
            </div>

            <div className="bg-foreground min-h-screen px-4 py-8">
                <PageShell />
            </div>

        </>
    )
}