import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center items-center bg-foreground mx-auto py-auto min-h-screen">
            <SignIn />;
        </div>
    )
}