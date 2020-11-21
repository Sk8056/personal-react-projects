import React, { useContext } from 'react'
import RoomsFilter from "./RoomsFilter"
import RoomsList from "./RoomsList"
import Loading from "../components/Loading"
import { RoomContext } from "../RoomProviderContext";
export default function RoomsContainer() {

    const { rooms, sortedRooms, loading } = useContext(RoomContext);

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList room={sortedRooms} />
        </>
    )
}
