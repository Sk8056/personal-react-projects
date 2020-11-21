import React, { createContext, useEffect, useState } from 'react'
import items from "./data"
const RoomContext = createContext();

export default function RoomProviderContext({ children }) {

    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [featuredRooms, setFeaturedRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('all');
    const [capacity, setCapacity] = useState(0);
    const [price, setPrice] = useState(0);
    const [minPrice, setMinprice] = useState(0);
    const [maxPrice, setMaxprice] = useState(0);
    const [minSize, setMinsize] = useState(0);
    const [maxSize, setMaxsize] = useState(0);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);

    useEffect(() => {
        //rooms is an newArray
        let rooms = formatData(items);
        //featuredRoom is an new array
        let featuredRoom = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map((item) => item.price));
        let maxSize = Math.max(...rooms.map((item) => item.size));
        setRooms(rooms);
        setSortedRooms(rooms);
        setLoading(false);
        setFeaturedRooms(featuredRoom);
        setMaxprice(maxPrice);
        setMaxsize(maxSize);
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

    const handleChange = e => {
        const type = e.target.type;
        const name = e.target.name;
        const value = e.target.value;
    }

    const filterRooms = () => {
        console.log("hello");
    }

    return (
        <RoomContext.Provider value={{ rooms, featuredRooms, sortedRooms, loading, getRoom: getRoom, handleChange: handleChange }}>
            {children}
        </RoomContext.Provider>
    )
}
export { RoomContext }
