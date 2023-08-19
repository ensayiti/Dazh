import { Foot } from "@/components/footer";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { UserNav } from "@/components/user-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard app using Next"
}

export default function Dashboard() {
    return (
        <>
            <div className="drawer bg-foreground h-screen">
                <input type="checkbox" id="drawer-one" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-foreground text-primary-foreground border-b">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="drawer-one" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 font-semibold">Dazh</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal space-x-2 text-primary-foreground rounded-box">
                                <li className="hover:bg-primary-foreground rounded-lg transition-all duration-300"><a>Overview</a></li>
                                <li className="hover:bg-primary-foreground rounded-lg transition-all duration-300"><a>Products</a></li>
                                <li className="hover:bg-primary-foreground rounded-lg transition-all duration-300"><a>Customers</a></li>
                                <UserNav />
                            </ul>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <Tabs defaultValue="overview" className="space-y-4 mb-4 mt-4 container">
                            <TabsContent value="overview" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth='2' className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">IDR 52.965.142</div>
                                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Registered Users</CardTitle>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth='2' className="h-4 w-4 text-muted-foreground">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">87</div>
                                            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth='2' className="h-4 w-4 text-muted-foreground">
                                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                                <path d="M2 10h20" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">1125</div>
                                            <p className="text-xs text-muted-foreground">+19% from last month</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Active Products</CardTitle>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth='2' className="h-4 w-4 text-muted-foreground">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">455</div>
                                            <p className="text-xs text-muted-foreground">+201 since last hour</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                {/* Mobile Navbar Drawer */}
                <div className="drawer-side">
                    <label htmlFor="drawer-one" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full space-y-2 bg-foreground text-primary-foreground">
                        <li className="hover:bg-primary-foreground rounded-full transition-all duration-300"><a>Overview</a></li>
                        <li className="hover:bg-primary-foreground rounded-full transition-all duration-300"><a>Products</a></li>
                        <li className="hover:bg-primary-foreground rounded-full transition-all duration-300"><a>Customers</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}