"use client"
import Hero from "@/components/hero/Hero";
import HeroCart from "@/components/herocart/HeroCart";
import HeroFeatures from "@/components/herofeatures/HeroFeatures";
import HeroFooter from "@/components/herofooter/HeroFooter";
import HeroTemp from "@/components/herotemp/HeroTemp";
import Navbar from "@/components/Navbar";
import SignIn from "@/components/signin/SignIn";
import { useState } from "react";

export default function HomaPage () {

    const [menu, setMenu] = useState(false);

    return (
        <>
        <Navbar setMenu={setMenu} />
        {menu?<SignIn setMenu={setMenu} />:""}
        <Hero setMenu={setMenu} />
        <HeroCart />
        <HeroTemp />
        <HeroFeatures />
        <HeroFooter />
        </>
    )
}