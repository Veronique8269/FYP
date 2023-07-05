import { createContext, useContext, useEffect, useState } from "react";
import F01 from "../assets/flowers/1_AdobeExpress.gif";
import F02 from "../assets/flowers/2_AdobeExpress.gif";
import F03 from "../assets/flowers/3_AdobeExpress.gif";
import F04 from "../assets/flowers/4_AdobeExpress.gif";
import F05 from "../assets/flowers/5_AdobeExpress.gif";
import F06 from "../assets/flowers/6_AdobeExpress.gif";

import T01 from "../assets/flowers_transfer/11_AdobeExpress.gif";
import T02 from "../assets/flowers_transfer/22_AdobeExpress.gif";
import T03 from "../assets/flowers_transfer/33_AdobeExpress.gif";
import T04 from "../assets/flowers_transfer/44_AdobeExpress.gif";
import T05 from "../assets/flowers_transfer/55_AdobeExpress.gif";
import T06 from "../assets/flowers_transfer/66_AdobeExpress.gif";

import axios from "axios";
import { nanoid } from "nanoid";
const FlowerContext = createContext();
const flowers = [F01, F02, F03, F04, F05, F06];
const trans = [T01, T02, T03, T04, T05, T06];

const useFlowerContext = () => {
  const context = useContext(FlowerContext);
  return {
    ...context,
  };
};

const FlowerProvider = (props) => {
  const index = Math.floor(Math.random() * flowers.length);
  const [flower, setFlower] = useState(flowers[index]);
  const [tran, setTran] = useState(trans[index]);
  const [starData, setStarData] = useState([]);

  async function getStars() {
    const res = await axios.post("http://www.qinsw666.top:5000/getstars");
    setStarData(() => new Array(res.data.data).fill(0));
  }

  async function uploadFlower() {
    let uploadID = nanoid(5);

    const res = await axios.post("http://www.qinsw666.top:5000/share", {
      id: uploadID,
    });
    setStarData(() => new Array(res.data.data).fill(0));
  }

  const contextValue = {
    flower,
    tran,
    starData,
    getStars,
    uploadFlower,
  };

  return <FlowerContext.Provider value={contextValue} {...props} />;
};

export { useFlowerContext, FlowerProvider };
