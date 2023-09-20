import SectionHeading from "./SectionHeading";
import { topPicks } from "../data/data";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";

//Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const TopPicks = () => {
  return (
    <Section>
      <SectionHeading text="Top Picks" />
      <Container className="top_picks_container">
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          modules={[Autoplay]}
        >
          {topPicks?.map((item) => (
            <SwiperSlide key={item.id} className="card_item">
              <div className="image">
                <Image src={item.img} alt={item.title} />
              </div>
              <div className="text">
                <Link to="/">{item.title}</Link>
                <p>{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 0;
  .top_picks_container {
    .card_item {
      border-radius: 10px;
      overflow: hidden;
      padding: 15px;
      margin: 15px 0;
      box-shadow: 0px 1px 1px rgba(3, 7, 18, 0.02),
        0px 5px 4px rgba(3, 7, 18, 0.03), 0px 0px 9px rgba(3, 7, 18, 0.05),
        0px 0px 15px rgba(3, 7, 18, 0.06), 0px 7px 24px rgba(3, 7, 18, 0.08);

      .image {
        height: 200px;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .text {
        padding-top: 20px;
        a {
          color: #123123;
          font-size: 20px;
          font-weight: 500;
        }
        p {
          color: #6c6c6c;
          font-size: 16px;
          font-weight: 400;
          padding-top: 10px;
        }
      }
    }
  }
`;

export default TopPicks;
