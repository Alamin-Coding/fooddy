/* eslint-disable react/no-unescaped-entities */
import { Card, Container } from "react-bootstrap";
import getData from "../data/product";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);

  // CATEGORY
  const categories = [];
  getData.map((item) => categories.push(item.category.toLowerCase()));
  const newCategory = [...new Set(categories)];

  // COLOR
  const colors = [];
  getData.map((item) => colors.push(item.color.toLowerCase()));
  const newColor = [...new Set(colors)];

  // COMPANY
  const company = [];
  getData.map((item) => company.push(item.company.toLowerCase()));
  const newCompany = [...new Set(company)];

  const companyMenuList = Array.from(
    document.querySelectorAll(".recommended ul li")
  );

  useEffect(() => {
    setData(getData);
  }, []);

  // CATEGORY FILTER
  const categoryHandler = (filterText) => {
    setData(
      getData.filter(
        (item) => item.category.toLowerCase() === filterText.toLowerCase()
      )
    );
  };

  // COLOR FILTER
  const colorHandler = (filterText) => {
    setData(
      getData.filter(
        (item) => item.color.toLowerCase() === filterText.toLowerCase()
      )
    );
  };

  // COMPANY FILTER
  const companyHandler = (filterText) => {
    setData(
      getData.filter(
        (item) => item.company.toLowerCase() === filterText.toLowerCase()
      )
    );
  };

  // COMPANY MENU ACTIVE
  companyMenuList.map((item) => {
    item.addEventListener("click", () => {
      companyMenuList.map((list) => list.classList.remove("active"));
      item.classList.add("active");
      let inputs = Array.from(document.querySelectorAll("input"));
      inputs.map((input) => (input.checked = false));
    });
  });

  // PRICE FILTER
  const priceFilter = (min, max = 99999999) => {
    setData(
      getData.filter((item) => item.newPrice >= min && item.newPrice <= max)
    );
  };

  return (
    <Section>
      <Container className="fluid">
        <div className="product_container">
          <div className="left_side">
            <div className="side_bar">
              <div className="filter_item_box">
                <div className="category">
                  <h4>Category</h4>
                  <ul>
                    <li onClick={() => setData(getData)}>All</li>
                    {newCategory.map((item, index) => (
                      <li key={index}>
                        <input
                          type="radio"
                          name="radio"
                          onClick={() => categoryHandler(item)}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="filter_item_box">
                <div className="price">
                  <h4>Price</h4>
                  <ul>
                    <li>
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => setData(getData)}
                      />
                      All
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => priceFilter(0, 60)}
                      />
                      $0 - $60
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => priceFilter(60, 100)}
                      />
                      $60 - $100
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => priceFilter(100, 199)}
                      />
                      $100 - $199
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => priceFilter(200)}
                      />
                      Over $200
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter_item_box">
                <div className="colors">
                  <h4>Colors</h4>
                  <ul>
                    <li onClick={() => setData(getData)}>
                      <span
                        style={{
                          background:
                            "linear-gradient(45deg, red, blue, white, black, green)",
                        }}
                        onClick={() => setData(getData)}
                      ></span>
                      All
                    </li>
                    {newColor.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{ background: `${item}` }}
                          onClick={() => colorHandler(item)}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right_side">
            <div className="recommended">
              <h3>Recommended</h3>
              <ul>
                <li className="active" onClick={() => setData(getData)}>
                  All
                </li>
                {newCompany?.map((item, index) => (
                  <li key={index} onClick={() => companyHandler(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="product_display">
              {data?.map((item) => (
                <Card key={item.id}>
                  <div className="image p-2">
                    <Card.Img variant="top" src={item.img} />
                    <span>{item.company}</span>
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <Link to={"/"}>{item.title}</Link>
                    </Card.Title>
                    <div className="review">
                      <span>{item.reviews}</span>
                    </div>
                    <div className="price_box">
                      <del>{item.prevPrice}</del>
                      <span>${item.newPrice}</span>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 0;
  .product_container {
    display: grid;
    grid-template-columns: 1fr 6fr;
    gap: 20px;
    .left_side {
      position: relative;
      .side_bar {
        background: #fff;
        position: sticky;
        top: 0;
        z-index: 400;
        .filter_item_box {
          padding-bottom: 40px;
          &:last-child {
            padding-bottom: 0;
          }
          h4 {
            color: #079841;
            font-size: 20px;
            font-weight: 700;
            padding-bottom: 5px;
          }
          ul {
            display: flex;
            flex-direction: column;
            gap: 15px;
            li {
              display: flex;
              align-items: center;
              gap: 10px;
              line-height: 1;
              user-select: none;
              input {
                cursor: pointer;
              }
            }
          }
          .colors {
            ul {
              li {
                span {
                  display: inline-block;
                  width: 15px;
                  height: 15px;
                  border-radius: 50%;
                  border: 1px solid #fedfde;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }

  .right_side {
    position: relative;
    .recommended {
      background: #fff;
      position: sticky;
      top: 0;
      z-index: 400;
      ul {
        padding-top: 10px;
        padding-bottom: 30px;
        display: flex;
        align-items: center;
        gap: 15px;
        li {
          padding: 8px 15px;
          border-radius: 5px;
          background: #12212e;
          color: #eeeeee;
          text-transform: capitalize;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all linear 0.3s;
          &:hover {
            background: #079841;
          }
        }
        .active {
          background: #079841;
        }
      }
    }
    .product_display {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;

      .card {
        .image {
          position: relative;
          span {
            position: absolute;
            top: 10px;
            left: 10px;
            display: inline-block;
            min-width: 60px;
            padding: 0 5px;
            line-height: 30px;
            color: #e1e1e1;
            background: #19374f;
            text-align: center;
            font-size: 16px;
            font-weight: 300;
          }
        }
        .card-body {
          justify-content: end;
          display: flex;
          flex-direction: column;
          .card-title {
            a {
              color: #12212e;
              font-size: 18px;
            }
          }
          .price_box {
            del {
              margin-right: 10px;
              color: #b08989;
            }
            span {
              font-weight: 500;
              font-size: 16px;
              color: #19374f;
            }
          }
        }
      }
    }
  }
`;

export default Product;
