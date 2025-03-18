"use client";

import React, {useState, useEffect} from "react";
import { KoreanCities, CanadianCities } from "@/constants";

type CityProps = {
    country: string;
}

const City = ({country}: CityProps) => {
    const [city, setCity] = useState("");

    useEffect(() => {
        if (!city) {  // Only set if city is not already selected
            setCity(country === "Korea" ? "Seoul" : "Vancouver");
        }
    }, [country, city]);

    return (
        <div className="flex border-2 border-gray-300 rounded-md p-2 pointer-events-auto z-10">
            <select value={city} className = "text-xl focus:outline-none" onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>
                {country === "Korea" ? (
                    KoreanCities.map((city: string) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))
                ) : (
                    CanadianCities.map((city: string) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))
                )
            }
            </select>
        </div>
    )

}

export default City;