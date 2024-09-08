import Hero from "@/components/Homepage/HeroSection/Hero";
import Products from "@/components/Homepage/Products/Products";
import Features from "@/components/Homepage/Features/Features";
import Footer from "@/components/Common/Footer/Footer";
import Head from "next/head";

export default function Home() { 
  return (
    <>
    <Head>
      <title>ShopWave - Shop for fun...</title>
    </Head>
      <Hero />
      <Products />
      <Features />
      {/* <Footer /> */}
    </>
  )
}
