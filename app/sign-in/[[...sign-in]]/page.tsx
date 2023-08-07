import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dazh | Sign In",
    description: "Sign In using Clerk"
}

export default function Page() {
    return (
        <div className="flex justify-center items-center bg-foreground mx-auto py-auto min-h-screen">
            <SignIn appearance={{
                elements: {
                    socialButtonsBlockButton: 'bg-primary text-secondary hover:text-primary transition duration-300',
                    formButtonPrimary: 'bg-primary hover:bg-muted-foreground text-sm normal-case transition duration-300',
                    formFieldInput: 'rounded-lg ring-1 focus:ring-primary focus:border-primary transition duration-300'
                }
            }} />;
        </div>
    )
}