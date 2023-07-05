
import { useState } from "react";
import { InputWord } from "./InputWord";
import { ShowFlower } from "./ShowFlower";
import { Garden } from "./Garden";

export function HomePage() {
  const [word, setWord] = useState("");
  const [isPage2, setisPage2] = useState(false);
  const [isPage3, setisPage3] = useState(false);

  return (
    <>
      <InputWord word = {word} setWord = {setWord} setisPage2 = {setisPage2}/>
      { isPage2 ? <ShowFlower setisPage3 = {setisPage3} />: null }
      { isPage3 ? <Garden/>: null }
    </>
  );
}
