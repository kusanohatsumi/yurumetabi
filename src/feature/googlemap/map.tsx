// src/components/GoogleMap.tsx
import React, { useEffect, useRef, useState } from "react";

// 初期化用の定数
const INITIALIZE_LAT = 35.68238; // 緯度
const INITIALIZE_LNG = 139.76556; // 経度
const INITIALIZE_ZOOM = 15; // ズームレベル

const INITIALIZE_MAP_WIDTH = "100%"; // 地図の幅
const INITIALIZE_MAP_HEIGHT = "400px"; // 地図の高さ

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initializedMap = new window.google.maps.Map(mapRef.current, {
      center: { lat: INITIALIZE_LAT, lng: INITIALIZE_LNG },
      zoom: INITIALIZE_ZOOM,
    });

    setMap(initializedMap);
  }, []);

  return (
    <div>
      <div
        ref={mapRef}
        style={{ width: INITIALIZE_MAP_WIDTH, height: INITIALIZE_MAP_HEIGHT }}
      />
    </div>
  );
};

export default GoogleMap;
