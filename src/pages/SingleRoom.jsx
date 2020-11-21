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

    //array destructuring
    const [mainImg, ...otherImg] = images;

    return (
        <>
            <StyledHero img={mainImg} >
                <Banner title={`${name} room`} >
                    <Link to="/rooms" className="btn-primary">back to room</Link>
                </Banner>
            </StyledHero>

            <section className="single-room">
                <div className="single-room-images">
                    {otherImg.map((img, index) => {
                        return <img key={index} src={img} alt="Rooms Images" />
                    })}
                </div>

                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>

                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : ${size} SQFT</h6>
                        <h6>
                            max capacity : {" "}
                            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6>{pets ? "pets allowed" : "no pets allowed "}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}> - {item}</li>
                        })}
                    </ul>
                </section>
            </section>
        </>
    )
}
