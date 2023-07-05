import styled from "styled-components";
import { Toast } from "antd-mobile";
import FlowerBG from "../../assets/flower-bg.png";
import Arrow from "../../assets/arrow.png";
import { useState } from "react";

export function InputWord(props) {
  
  const { word, setWord, setisPage2 } = props;
  function switchPage() {
    if (word.length < 1) {
      Toast.show({
        content: "Pls input a word!",
      });
      return;
    }
    setisPage2(true);
  }

  return (
    <Container>
      <GuideBox>
        <div className="arrow-button" onClick={switchPage}>
          <img src={Arrow} alt="arrow" width={50} />
        </div>
        <div>
          <span className="bracket">(</span>
          <input
            placeholder="good word"
            onChange={(e) => setWord(e.target.value)}
          />
          <span className="bracket">)</span>
        </div>
      </GuideBox>
      <img className="bg" src={FlowerBG} alt="flower-bg" />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  .bg {
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: 9;
  }
`;

const GuideBox = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .arrow-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(186, 57, 57, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  input {
    width: 10rem;
    text-align: center;
    font-size: 2rem;
    margin: 1rem;
    border: none;
    outline: none;
  }

  .bracket {
    font-size: 2.5rem;
  }
`;
