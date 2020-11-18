import React, { useContext } from 'react'
import { RoomContext } from "../RoomProviderContext"
import Loading from "./Loading"
import Room from "./Room"
import Title from "./Title"

export default function FeaturedRoom() {
    //object destructuring 
    const { featuredRooms, loading } = useContext(RoomContext)
    //newFeaturedRoom is an new array with room components.
    const newFeaturedRooms = featuredRooms.map(room => {
        return <Room key={room.id} room={room} />
    })
    return (
        <section className="featured-rooms">
            <Title title="featured-rooms" />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : newFeaturedRooms}
            </div>
        </section>
    )
}
