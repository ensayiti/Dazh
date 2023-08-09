import NavBar from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Feature } from "@/components/feature";
import { HomeFooter } from "@/components/home-footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Feature />
      <HomeFooter />
    </>
  )
}
