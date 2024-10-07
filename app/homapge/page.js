import Hero from "@/components/hero/Hero";
import HeroCart from "@/components/herocart/HeroCart";
import HeroFeatures from "@/components/herofeatures/HeroFeatures";
import HeroFooter from "@/components/herofooter/HeroFooter";
import HeroTemp from "@/components/herotemp/HeroTemp";
import Navbar from "@/components/Navbar";

export default function HomaPage () {
    return (
        <>
        <Navbar />
        <Hero />
        <HeroCart />
        <HeroTemp />
        <HeroFeatures />
        <HeroFooter />
        </>
    )
}