import React from 'react'
import Room from "./Room"
export default function RoomsList({ room }) {

    if (room.length == 0) {
        return <div className="empty-seacrh">
            <h3>Unfortunately no rooms match your search parameters</h3>
        </div>
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {room.map((item) => {
                    return <Room key={item.id} room={item} />
                })}
            </div>
        </section>
    )
}
