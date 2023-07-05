import styled,{keyframes} from "styled-components";
import HKMap from "../../assets/map.gif";
import { useFlowerContext } from "../../context/useFlowerContext";
import { useEffect, useRef, useState } from "react";
import shining from "../../assets/shining.png";

export function BrowserPage() {
  const { starData, getStars } = useFlowerContext();
  const mapRef = useRef(null);
  const [areaRange, setAreaRange] = useState(null);

  useEffect(() => {
    getStars();
  }, []);

  useEffect(() => {
    const mapPosition = mapRef.current.getBoundingClientRect();

    if(!areaRange){
      setAreaRange(() => ({
        x: { min: 0, max:  window.innerWidth-50},
        y: { min: mapPosition.top, max: mapPosition.bottom-50 },
      }));
    }else{
    }
  }, [areaRange]);
  return (

    <Container>
      <img className="map" src={HKMap} alt="map" ref = {mapRef}/>
      {areaRange? starData.map((star, index) => (
        <img
          key={index}
          className="shining"
          style={{
            left: Math.abs(
              Math.random() * (areaRange.x.max - areaRange.x.min) +
                areaRange.x.min
            ),
            top: Math.abs(
              Math.random() * (areaRange.y.max - areaRange.y.min) +
                areaRange.y.min
            ),
            width: "50px",
            position: "absolute",
          }}
          src={shining}
          alt="shining"
        />
      )):null}
    </Container>
  );
}

const shiningAnimation = keyframes`
0% {
  opacity: 0;
}
30% {
  opacity: 1;
}
60% {
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .map {
    position: relative;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  
  .shining {
    z-index: 300;
    animation: ${shiningAnimation} 3s infinite;
  }
`;
