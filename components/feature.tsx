import { CheckCircle2, Component, PencilRuler } from "lucide-react";

export function Feature() {
    return (
        <section className="bg-foreground" id="feature">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-lg mb-8 lg:mb-8">
                    <h1 className="text-primary-foreground flex justify-center items-center mb-4 text-3xl md:text-4xl tracking-tight font-semibold">Designed for <span className="font-extrabold ml-2">Aesthetic</span></h1>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div className="bg-card rounded-lg p-3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                        <h3 className="flex justify-center items-center text-primary mb-1 text-xl font-bold">Customizable <span className="inline-flex w-5 h-5 ml-2 justify-center items-center align-middle"><PencilRuler /></span></h3>
                        <p className="text-primary tracking-tighter leading-tight">Dazh is highly customizable, and customized according to your preferences and tastes. By using CSS Variables, you wont be confused about choosing a color palette or theme.</p>
                    </div>

                    <div className="bg-card rounded-lg p-3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                        <h3 className="flex justify-center items-center text-primary mb-1 text-xl font-bold">Reusable Components <span className="inline-flex w-5 h-5 ml-2 justify-center items-center align-middle"><Component /></span></h3>
                        <p className="text-primary tracking-tighter leading-tight">Using reusable components is one way out for time efficiency. Your time will not be wasted designing a component, section, or block. Very easy right? Thats Dazh goal!</p>
                    </div>

                    <div className="bg-card rounded-lg p-3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                        <h3 className="flex justify-center items-center text-primary mb-1 text-xl font-bold">All-in-One <span className="inline-flex w-5 h-5 ml-2 justify-center items-center align-middle"><CheckCircle2 /></span></h3>
                        <p className="text-primary tracking-tighter leading-tight">You dont need to create landing pages and dashboards in different projects. Dazh was built to meet those needs. So that your time will not run out to build two different applications.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}