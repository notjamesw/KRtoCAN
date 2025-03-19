"use client";

import City from "@/components/city";
import { useState } from "react";
import Container from "@/components/container";
import Clock from "@/components/clock";

export default function Home() {
  const [KoreanCity, setKoreanCity] = useState("Seoul");
  const [CanadianCity, setCanadianCity] = useState("Vancouver");

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        Home
        <div className = "flex-cols cols-2 gap-12 w-1/2">
          <City country="Korea" city={KoreanCity} setCity={setKoreanCity}></City>
          <City country="Canada" city={CanadianCity} setCity={setCanadianCity}></City>
          <Container component = {<Clock country = "Korea" city = {KoreanCity}></Clock>}></Container>
          <Container component = {<Clock country = "Canada" city = {CanadianCity}></Clock>}></Container>
        </div>
      </div>
    </div>
  );
}
