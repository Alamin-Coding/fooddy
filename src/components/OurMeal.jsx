import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import { Container, Image } from "react-bootstrap";
import { mealData } from "../data/data";
import { Link } from "react-router-dom";
import { useState } from "react";
const OurMeal = () => {
  const [meal, setMeal] = useState(mealData);

  let newArr = [];
  mealData.map((item) => newArr.push(item.category));

  let categories = [...new Set(newArr)];

  const categoryFilterHandler = (categoryText) => {
    setMeal(mealData.filter((item) => item.category === categoryText));
  };

  return (
    <Section>
      <SectionHeading text={"Our Meal"} />
      <Container>
        <div className="category">
          <ul>
            <li onClick={() => setMeal(mealData)}>All</li>
            {categories?.map((category, index) => (
              <li onClick={() => categoryFilterHandler(category)} key={index}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="meal_container">
          {meal?.map((item) => (
            <div key={item.id} className="meal_card">
              <div className="image">
                <Image src={item.image} alt={item.name} />
              </div>
              <div className="text">
                <Link to="/">{item.name}</Link>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  .category {
    text-align: center;
    padding: 20px 0;
    ul {
      display: flex;
      gap: 15px;
      align-items: center;
      justify-content: center;

      li {
        padding: 7px 15px;
        border-radius: 5px;
        background: #079841;
        color: #ececec;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        text-transform: capitalize;
        transition: all linear 0.3s;
        &:hover {
          background: #123123;
          color: #ffffff;
        }
      }
    }
  }
  .meal_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    .meal_card {
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
          text-transform: capitalize;
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

export default OurMeal;
