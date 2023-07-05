import styled, { keyframes } from "styled-components";
import { useFlowerContext } from "../../context/useFlowerContext";
import { useRef, useEffect, useState } from "react";
import HKMap from "../../assets/map.gif";
import shining from "../../assets/shining.png";
import axios from "axios";

export function Garden() {
  const { tran, starData, uploadFlower } = useFlowerContext();
  const gifRef = useRef(null);
  const mapRef = useRef(null);
  const [areaRange, setAreaRange] = useState(null);
  const [showShining, setShowShining] = useState(false);

  function pauseGif() {
    gifRef.current.style.visibility = "hidden"; // 隐藏 GIF 元素
    gifRef.current.style.animationPlayState = "paused"; // 暂停动画
  }

  useEffect(() => {
    setTimeout(() => {
      pauseGif();
      setShowShining(true);
    }, 7860);
  }, [areaRange]);

  useEffect(() => {
    if(!areaRange){
      setAreaRange(() => ({
        x: { min: 0, max:  window.innerWidth-50},
        y: { min: 200, max: window.innerHeight-200 },
      }));
    }else{
   
    }
  }, []);

  useEffect(() => {});

  return (
    <Container className="animate__animated animate__slideInLeft">
      <img className="trans" src={tran} alt="flower" loop="0" ref={gifRef} />
      <img className="map" src={HKMap} alt="map" ref={mapRef} />
      {
        areaRange?<img
        className={showShining ? "shining-t" : "shining-f"}
        style={{
          left: Math.abs(
            Math.random() * (areaRange.x.max - areaRange.x.min) +
              areaRange.x.min
          ),
          top: Math.abs(
            Math.random() * (areaRange.y.max - areaRange.y.min) +
              areaRange.y.min
          ),
        }}
        src={shining}
        alt="shining"
      />:null
      }
      
      {showShining && areaRange && starData.length>0 ? starData.map((star, index) => {
        return (
          <img
            key={index}
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
        );
      }):null}
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

const scaleAnimation = keyframes`
0% {
  transform: scale(5);
}
100%{
  transform: scale(1);
}
`;

const Container = styled.div`
  position: absolute;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .trans {
    width: 100vw;
    height: 100vh;
    position: absolute;
  }

  .map {
    width: 100vw;
  }

  .shining-f {
    display: none;
  }

  .shining-t {
    position: absolute;
    z-index: 300;
    width: 50px;
    animation: ${scaleAnimation} 3s 1 forwards,
      ${shiningAnimation} 3s 1 forwards;
  }
`;
