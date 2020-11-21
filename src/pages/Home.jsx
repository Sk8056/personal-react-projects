import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import Services from "../components/Services"
import FeaturedRoom from "../components/FeaturedRoom"

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Luxurious rooms" subtitle="Delux rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">OUR ROOMS</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
        </>
    )
}
