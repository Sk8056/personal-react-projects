import React, { createContext, useEffect, useState } from 'react'
import items from "./data"
const RoomContext = createContext();

export default function RoomProviderContext({ children }) {

    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [featuredRooms, setFeaturedRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //rooms is an newArray
        let rooms = formatData(items);
        //featuredRoom is an new array
        let featuredRoom = rooms.filter(room => room.featured === true);

        setRooms(rooms);
        setSortedRooms(rooms);
        setLoading(false);
        setFeaturedRooms(featuredRoom);
    }, [])

    function formatData(items) {
        //tempItems is an newArray
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url)
            //object destructuring
            let room = { ...item.fields, images, id }
            return room;
        })
        return tempItems;
    }

    function getRoom(slug) {
        let tempRooms = [...rooms];
        const slugRooms = tempRooms.find(r => r.slug === slug)
        return slugRooms;
    }

    return (
        <RoomContext.Provider value={{ rooms, featuredRooms, sortedRooms, loading, getRoom: getRoom }}>
            {children}
        </RoomContext.Provider>
    )
}
export { RoomContext }
