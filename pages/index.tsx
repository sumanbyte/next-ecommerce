import Hero from "@/components/HeroSection/Hero";
import Navbar from "@/components/Navigation/Navbar";
import Products from "@/components/Products/Products";
import Navibar from "@/components/Navigation/Navibar";



export default function Home() {
  
  return (
    <>
      <Navbar/>

      <Hero />
      <Products />
    </>
  )
}
