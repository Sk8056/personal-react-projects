import React, { useContext, useEffect } from 'react'
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../RoomProviderContext";
import StyledHero from "../components/StyledHero"

export default function SingleRoom({ history, location, match, isAuth }) {

    const { getRoom } = useContext(RoomContext);

    const slug = match.params.slug
    const room = getRoom(slug);
    if (!room) {
        return <div className="error">
            <h3>no such room could be found...</h3>
            <Link to="/rooms" className="btn-primary">BACK TO ROOM</Link>
        </div>
    }
    //object destructuring
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
    return (
        <>
            <StyledHero img={images[0]} >
                <Banner title={`${name} room`} >
                    <Link to="/rooms" className="btn-primary">back to room</Link>
                </Banner>
            </StyledHero>
        </>
    )
}
