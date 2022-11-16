import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import coast from '../../img/coast.png';
import Sone from '../../img/sone';
import cloud2 from '../../img/cloud2.png';
import cloud4 from '../../img/cloud4.png';
import stars from '../../img/stars.png';
import boat from '../../img/boat.png';
// import sone from '../../img/sone.svg';
import './page-three .sass';

const PageThree: React.FC = () => {
  const [whellCount, setWhellCount] = useState<[number, number]>([0, 0]);
  const [signCount, setSignCount] = useState<number>();
  const [sonePositionTop, setSonePositionTop] = useState(156);
  const [soneWidth, setsoneWidth] = useState(150);
  const [soneFill, setSoneFill] = useState<number>(256);
  const [skyFill, setSkyFill] = useState<number>(166);
  const [seaFill, setSeaFill] = useState<number>(176);
  const [starsOpacity, setStarsOpacity] = useState<number>(0);
  const [cloudWidth, setCloudWidth] = useState(700);
  const [cloudPositionTop, setCloudPositionTop] = useState(10);
  const [cloudPositionLeft, setCloudPositionLeft] = useState(10);

  document.addEventListener('wheel', (event) => {
    // console.log(event.deltaY);
    const sign = Math.sign(event.deltaY);

    // console.log(event.deltaY, 'event.deltaY');

    if (sign === 1) {
      setSignCount(1);
      setWhellCount([whellCount[1], whellCount[1] + event.deltaY]);
    } else {
      setSignCount(0);
      setWhellCount([whellCount[1], whellCount[1] + event.deltaY]);
    }
  });
  useEffect(() => {
    if (whellCount[1] > whellCount[0]) {
      // console.log(whellCount, 'up');
      increaseSone();
      increaseSonePosition();
      increaseSoneFill();
      increaseCloudWidth();
      increaseCloudPositionTop();
      increaseCloudPositionLeft();
      increaseSkyFill();
      increaseSeaFill();
      increaseStarsOpacity();
    } else {
      // console.log(whellCount, 'down');
      decreaseSonePosition();
      decreaseSone();
      decreaseSoneFill();
      decreaseCloudWidth();
      decreaseCloudPositionTop();
      decreaseCloudPositionLeft();
      decreaseSkyFill();
      decreaseSeaFill();
      decreaseStarsOpacity();
    }
  }, [whellCount]);

  const increaseCloudPositionLeft = () => {
    if (soneWidth > 480) {
    } else {
      setCloudPositionLeft(cloudPositionLeft - 40);
    }
  };
  const decreaseCloudPositionLeft = () => {
    if (soneWidth < 150) {
    } else {
      setCloudPositionLeft(cloudPositionLeft + 40);
    }
  };
  const increaseCloudPositionTop = () => {
    if (soneWidth > 480) {
    } else {
      setCloudPositionTop(cloudPositionTop - 20);
    }
  };
  const decreaseCloudPositionTop = () => {
    if (soneWidth < 150) {
    } else {
      setCloudPositionTop(cloudPositionTop + 20);
    }
  };
  const increaseCloudWidth = () => {
    if (soneWidth > 480) {
    } else {
      setCloudWidth(cloudWidth + 30);
    }
  };
  const decreaseCloudWidth = () => {
    if (soneWidth < 150) {
    } else {
      setCloudWidth(cloudWidth - 30);
    }
  };
  const increaseSoneFill = () => {
    if (soneWidth > 480) {
    } else {
      setSoneFill(soneFill - (soneFill / 100) * 3);
    }
  };
  const decreaseSoneFill = () => {
    if (soneWidth < 150) {
    } else {
      setSoneFill(soneFill + (soneFill / 100) * 3);
    }
  };
  const increaseSkyFill = () => {
    if (soneWidth > 480) {
    } else {
      setSkyFill(skyFill - (skyFill / 100) * 4);
    }
  };
  const decreaseSkyFill = () => {
    if (soneWidth < 150) {
    } else {
      setSkyFill(skyFill + (skyFill / 100) * 4);
    }
  };
  const increaseSeaFill = () => {
    if (soneWidth > 480) {
    } else {
      setSeaFill(seaFill - (seaFill / 100) * 2);
    }
  };
  const decreaseSeaFill = () => {
    if (soneWidth < 150) {
    } else {
      setSeaFill(seaFill + (seaFill / 100) * 2);
    }
  };
  const increaseSone = () => {
    if (soneWidth > 480) {
    } else {
      setsoneWidth(soneWidth + (soneWidth / 100) * 5);
    }
  };
  const decreaseSone = () => {
    if (soneWidth < 150) {
    } else {
      setsoneWidth(soneWidth - (soneWidth / 100) * 5);
    }
  };
  const increaseSonePosition = () => {
    if (sonePositionTop > 251) {
    } else {
      setSonePositionTop(sonePositionTop + (sonePositionTop / 100) * 5);
    }
  };
  const decreaseSonePosition = () => {
    if (sonePositionTop < 151) {
    } else {
      setSonePositionTop(sonePositionTop - (sonePositionTop / 100) * 5);
    }
  };
  const increaseStarsOpacity = () => {
    if (soneWidth > 480) {
    } else {
      setStarsOpacity(starsOpacity + 0.01);
    }
  };
  const decreaseStarsOpacity = () => {
    if (soneWidth < 150) {
    } else {
      setStarsOpacity(starsOpacity - 0.01);
    }
  };
  return (
    <div className="page-three">
      <div>
        <img
          style={{ opacity: starsOpacity }}
          className="page-three__stars"
          src={stars}
          alt=""
        />
        <div
          style={{
            background: `linear-gradient(0deg, rgb(36 155 239 / 32%) 23%, rgb(26 ${skyFill} 219 / 84%) 103%)`,
          }}
          className="page-three__sky"></div>
        <img
          style={
            cloudWidth < 1400
              ? {
                  top: cloudPositionTop + 120,
                  width: cloudWidth - 240,
                  right: cloudPositionLeft + 1000,
                }
              : {
                  top: cloudPositionTop + 120,
                  width: 1000,
                  right: cloudPositionLeft + 1000,
                }
          }
          className="page-three__cloud"
          src={cloud4}
          alt=""
        />
        <img
          style={{
            top: cloudPositionTop,
            width: cloudWidth,
            left: cloudPositionLeft,
          }}
          className="page-three__cloud"
          src={cloud2}
          alt=""
        />
        <Link to={'/home-page'}>
          <Sone
            sonePositionTop={sonePositionTop}
            soneWidth={soneWidth}
            soneFill={soneFill}
          />
        </Link>
        <img className="page-three__boat" src={boat} alt="" />
        <div className="page-three__sea-screen">
          <div
            style={{
              background: `linear-gradient(180deg, rgb(58 ${seaFill} 233) 20%, rgba(142, 212, 219, 0.47) 100%)`,
            }}
            className="page-three__sea">
            {' '}
          </div>
        </div>
        <img className="page-three__coast" src={coast} alt="" />
        <div className="page-three__coast-screen"></div>
      </div>
    </div>
  );
};
export default PageThree;
