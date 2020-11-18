import React from 'react'
import Title from "./Title"
import data from "../constants/serviceconstants"
export default function Services() {

    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {data.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
}
