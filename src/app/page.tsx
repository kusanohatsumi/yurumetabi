"use client";
import Map from "@/feature/googlemap";
import Input from "@/feature/googlemap/input";
import MapWithCurrentLocation from "@/feature/googlemap/location";
import MapWithDirections from "@/feature/googlemap/walking";

export default function Home() {
  return (
    <>
      <div>
        {/* <Map /> */}
        {/* <Input /> */}
        {/* <MapWithCurrentLocation /> */}
        <MapWithDirections />
        {/* <MapWithDirections /> */}
      </div>
    </>
  );
}
