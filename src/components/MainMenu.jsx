import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Container } from "react-bootstrap";
import {
  AiOutlineShoppingCart,
  AiOutlineMenuFold,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { useRef, useState } from "react";
const MainMenu = () => {
  const [menu, setMenu] = useState(false);
  const sideMenu = useRef();
  const overlay = useRef();

  const menuHandler = () => {
    setMenu(!menu);
    if (menu) {
      sideMenu.current.classList.remove("show");
      overlay.current.classList.remove("show");
    } else {
      overlay.current.classList.add("show");
      sideMenu.current.classList.add("show");
    }
  };

  return (
    <Nav>
      <Container className="menu_container">
        <div className="logo">
          <button onClick={() => menuHandler()}>
            <AiOutlineMenuFold size={30} />
          </button>
          <Link to="/">FOODDY</Link>
        </div>
        <div className="search">
          <AiOutlineSearch size={20} />
          <input type="search" placeholder="Search..." />
        </div>
        <div className="cart">
          <AiOutlineShoppingCart size={20} />
        </div>
      </Container>

      {/* Slide menu start */}
      <div className="slide_menu" ref={sideMenu}>
        <div className="header">
          <Link to={"/"} onClick={() => menuHandler()}>
            FOODDY
          </Link>
          <button className="close_btn" onClick={() => menuHandler()}>
            <AiOutlineClose />
          </button>
        </div>
        <ul>
          <li>
            <NavLink onClick={() => menuHandler()} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => menuHandler()} to={"/contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Slide menu end */}

      {/* Overlay start */}
      <div
        className="body_overlay"
        ref={overlay}
        onClick={() => menuHandler()}
      ></div>
      {/* Overlay end */}
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 15px 0;
  background: #2d5078;

  .menu_container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      gap: 15px;
      button {
        color: #e1e1e1;
      }
      a {
        color: #079841;
        font-size: 40px;
        font-weight: 700;
        line-height: 0;
      }
    }

    .search {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 10px;
      padding: 10px;
      background: #fefefe;
      border-radius: 50px;
      border: #4d565f 1px solid;
      flex: 1;
      margin: 0 100px;
      input {
        background: transparent;
        border: none;
      }
    }

    .cart {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #fefefe;
      border-radius: 50%;
      position: relative;
    }
  }

  .slide_menu {
    padding: 20px;
    width: 300px;
    height: 100vh;
    background: #f3f3f3;
    position: fixed;
    left: -100%;
    top: 0;
    z-index: 200;
    transition: ease-in-out 0.3s;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        color: #079841;
        font-size: 25px;
        text-transform: uppercase;
        font-weight: 700;
      }
      .close_btn {
        background: transparent;
        border: none;
        color: #111111;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 60px 20px;
      li {
        a {
          color: #111111;
          font-size: 16px;
        }
      }
    }
  }
  .slide_menu.show {
    left: 0;
  }

  .body_overlay {
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(17, 17, 17, 0.6);
    width: 100vw;
    height: 100vh;
    z-index: 100;
    transition: all linear 0.3s;
    opacity: 0;
    visibility: hidden;
  }
  .body_overlay.show {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    .menu_container {
      flex-wrap: wrap;
      gap: 15px;
      .search {
        order: 3;
        margin: 0 10px;
        padding: 8px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
    .menu_container {
      .search {
        margin: 0 30px;
        padding: 10px;
      }
    }
  }
`;

export default MainMenu;
