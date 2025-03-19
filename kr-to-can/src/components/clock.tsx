"use client";

import React, { useEffect, useState } from "react";

type CityProp = {
    country: string;
    city: string;
}

export default function Clock(props: CityProp) {
    const [time, setTime] = useState(new Date());

    const formattedTime = time.toLocaleTimeString("en-US", {
        timeZone: props.country === "Korea" ? 'Asia/Seoul' : `America/${props.city}`,
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>{props.city}</h2>
            <h3>{formattedTime}</h3>
        </div>
    )
}