import { styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const images = [
  {
    url: "https://i.ibb.co/0VNy2HB/banner-2.jpg",
  },
  {
    url: "https://i.ibb.co/MDvMn0p/banner-1.jpg",
  },
  {
    url: "https://i.ibb.co/0DmvBCC/banner-3.jpg",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const prevSlide = () => {
    const isPrevSlide = currentIndex === 0;
    const newIndex = isPrevSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isNextSlide = currentIndex === images.length - 1;
    const newIndex = isNextSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotHandler = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Banner>
      <div className="slide">
        <Image
          className="img-fluid w-100"
          src={`${images[currentIndex].url}`}
          alt="slide-1"
        />
        <div className="arrows">
          <button onClick={prevSlide}>
            <AiOutlineArrowLeft />
          </button>
          <button onClick={nextSlide}>
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="dots">
          <ul>
            {images.map((_, index) => (
              <li
                className={index === currentIndex ? "active" : ""}
                key={index}
                onClick={() => dotHandler(index)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </Banner>
  );
};

const Banner = styled.div`
  .slide {
    height: 580px;
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all linear 0.3s;
    }
    .arrows {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 95%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 300;
      button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fefefe;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #141414;
        opacity: 0;
        visibility: hidden;
        &:hover {
          background: #afafaf;
        }
      }
    }

    .dots {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 400;
      ul {
        display: flex;
        gap: 10px;
        align-items: center;
        li {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #123122;
          cursor: pointer;
        }
        li.active {
          background: greenyellow;
        }
      }
    }
    &:hover {
      .arrows {
        button {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
`;

export default Hero;
