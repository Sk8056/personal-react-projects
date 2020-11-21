import React, { useContext } from 'react'
import { RoomContext } from "../RoomProviderContext";
import Title from "../components/Title"

//get all unique values
const getUnique = (item, value) => {
    return [...new Set(item.map(item => item[value]))];
}

export default function RoomsFilter({ rooms }) {

    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, breakfast, pets } = useContext(RoomContext);

    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option key={index} value={item}> {item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}
            </form>
        </section>
    )
}
