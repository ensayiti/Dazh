import { Card, Grid, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, BadgeDelta, DeltaType } from "@tremor/react";
import { currentUser } from "@clerk/nextjs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default async function PageShell() {
    const user = await currentUser();

    const categories = [
        {
            title: "Sales",
            metric: "$ 23,456",
        },
        {
            title: "Profit",
            metric: "$ 13,123",
        },
        {
            title: "Customers",
            metric: "456",
        },
        {
            title: "Orders",
            metric: "112",
        },
    ];

    const salesPeople: {
        name: string;
        leads: number;
        sales: string;
        quota: string;
        variance: string;
        region: string;
        delta: string;
        deltaType: DeltaType;
    }[] = [
            {
                name: "Peter Doe",
                leads: 45,
                sales: "1,000,000",
                quota: "1,200,000",
                variance: "low",
                region: "Region A",
                delta: "overperforming",
                deltaType: "moderateIncrease",
            },
            {
                name: "Lena Whitehouse",
                leads: 35,
                sales: "900,000",
                quota: "1,000,000",
                variance: "low",
                region: "Region B",
                delta: "average",
                deltaType: "unchanged",
            },
            {
                name: "Phil Less",
                leads: 52,
                sales: "930,000",
                quota: "1,000,000",
                variance: "medium",
                region: "Region C",
                delta: "underperforming",
                deltaType: "moderateDecrease",
            },
            {
                name: "John Camper",
                leads: 22,
                sales: "390,000",
                quota: "250,000",
                variance: "low",
                region: "Region A",
                delta: "overperforming",
                deltaType: "increase",
            },
            {
                name: "Max Balmoore",
                leads: 49,
                sales: "860,000",
                quota: "750,000",
                variance: "low",
                region: "Region B",
                delta: "overperforming",
                deltaType: "increase",
            },
            {
                name: "Peter Moore",
                leads: 82,
                sales: "1,460,000",
                quota: "1,500,000",
                variance: "low",
                region: "Region A",
                delta: "average",
                deltaType: "unchanged",
            },
            {
                name: "Joe Sachs",
                leads: 49,
                sales: "1,230,000",
                quota: "1,800,000",
                variance: "medium",
                region: "Region B",
                delta: "underperforming",
                deltaType: "moderateDecrease",
            },
        ];

    return (
        <main>
            {/* <Title className="text-primary-foreground">Dashboard</Title>
            <Text className="text-primary-foreground">Welcome to Dazh, {user?.firstName}!</Text> */}
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Welcome, {user?.firstName}!</AlertTitle>
                <AlertDescription>
                    You can add components and dependencies to your app using the cli.
                </AlertDescription>
            </Alert>

            <TabGroup className="mt-3">
                <TabList>
                    <Tab className="text-primary-foreground">Overview</Tab>
                    <Tab className="text-primary-foreground">Table</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid numItemsMd={2} numItemsLg={4} className="gap-6 mt-6">
                            {categories.map((item) => (
                                <Card key={item.title} className="bg-card-foreground">
                                    <Text className="text-primary-foreground">{item.title}</Text>
                                    <Metric className="text-primary-foreground">{item.metric}</Metric>
                                </Card>
                            ))}
                        </Grid>
                        <div className="mt-6">
                            <Card className="bg-card-foreground">
                                <div className="h-96" />
                            </Card>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-6">
                            <Card>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableHeaderCell>Name</TableHeaderCell>
                                            <TableHeaderCell className="text-right">Leads</TableHeaderCell>
                                            <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
                                            <TableHeaderCell className="text-right">Quota ($)</TableHeaderCell>
                                            <TableHeaderCell className="text-right">Variance</TableHeaderCell>
                                            <TableHeaderCell className="text-right">Region</TableHeaderCell>
                                            <TableHeaderCell className="text-right">Status</TableHeaderCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {salesPeople.map((item) => (
                                            <TableRow key={item.name}>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell className="text-right">{item.leads}</TableCell>
                                                <TableCell className="text-right">{item.sales}</TableCell>
                                                <TableCell className="text-right">{item.quota}</TableCell>
                                                <TableCell className="text-right">{item.variance}</TableCell>
                                                <TableCell className="text-right">{item.region}</TableCell>
                                                <TableCell className="text-right">
                                                    <BadgeDelta deltaType={item.deltaType} size="xs">
                                                        {item.delta}
                                                    </BadgeDelta>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
    )
}