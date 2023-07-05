import styled from "styled-components";
import FlowerDownload from "../../assets/flower-download.png";
import FlowerShare from "../../assets/flower-share.png";
import { useFlowerContext } from "../../context/useFlowerContext";

export function ShowFlower(props) {
  const { flower,uploadFlower } = useFlowerContext();
  const { setisPage3 } = props;
  function downloadFlower() {
    var link = document.createElement("a");
    link.href = flower;
    link.download = "flower.gif";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function shareFlower() {
    setisPage3(true);
    uploadFlower();
  }

  return (
    <Container className="animate__animated animate__slideInLeft">
      <div className="download-box">
        <img
          src={FlowerDownload}
          alt="flower-download"
          onClick={downloadFlower}
        />
        <div>Save as picture</div>
      </div>

      <div className="show-flower">
        <img src={flower} alt="flower" />
      </div>
      <div className="share-box">
        <img src={FlowerShare} alt="flower-share" onClick={shareFlower}/>
        <div>Share to garden</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .download-box {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    img{
        width: 80px;
    }
  }

  .show-flower {
    img {
      width: 13rem;
      margin-bottom: 3rem;
    }
  }

  .share-box {
    width: 100vw;
    text-align: center;
    position: fixed;
    bottom: 30px;
    font-size: 1rem;
    img {
      width: 80px;
    }
  }
`;
