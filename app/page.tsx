import NavBar from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Feature } from "@/components/feature";
import { Price } from "@/components/price";
import { HomeFooter } from "@/components/home-footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Feature />
      <Price />
      <HomeFooter />
    </>
  )
}
