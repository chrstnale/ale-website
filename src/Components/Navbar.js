import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {MenuItems} from "./MenuItems"

export default class Navbar extends Component {
  state = { clicked: false, modalIsOpen: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  nothing = () => {};

  render() {

    return (
      <Header id="nav">
        <nav className="navbar">
          <Link
            to="/"
            className="logo"
            onClick={this.state.clicked ? this.handleClick : this.nothing()}
          >
            <p>Christian Ale</p>
          </Link>

          {/* Right-corner desktop & dropdown menu mobile: Menu Navigasi  */}
          <NavItemsStyled
            className={this.state.clicked ? "nav-items active" : "nav-items"}
            onClick={this.handleClick}
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.block ? "nav-links block" : "nav-links"}
                    to={item.url}
                    relative
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </NavItemsStyled>

          {/* Right-corner mobile: Hamburger bar & cross symbol*/}
          <NavIconStyled onClick={this.handleClick}>
            <FontAwesomeIcon
              icon={this.state.clicked ? faTimes : faBars}
              className="fa-icon" 
            />
          </NavIconStyled>
        </nav>

      </Header>
    );
  }
}

const Header = styled.header`
  //Give block with same height as absolute navbar
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  height: calc(0.5rem + 7.5vmin);
  z-index: 20;
  position: relative;

  .navbar {
    //Container style
    z-index: 3;
    background: var(--cream);
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    padding: 0.6vmin;
    width: 100%;
    top: 0;
    min-height: 12vmin;

    //Text style
    white-space: nowrap;
    font-size: calc(0.5rem + 1.5vmin);

    //Flex layout
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .logo {
      display: flex;
      align-items: center;
      text-align: center;
      text-decoration: none;
      margin-left: 5vmin;
      cursor: pointer;

      img {
        height: 2.5em;
        padding: 0.5em;
      }

      p {
        color: var(--black);
        text-decoration: none;
        font-weight: bold;
        font-size: calc(0.5rem + 2vmin);
      }
    }
    background: var(--cream);
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    height: calc(0.5rem + 8vmin);
    width: 100%;
    top: 0;

    //Text style
    white-space: nowrap;
    font-size: calc(0.5rem + 1.5vmin);

    //Flex layout
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  @media (min-width: 1024px) {
    .navbar {
      min-height: 0vmin;
    }
  }

`;
const NavItemsStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(${MenuItems.length}, auto);
  grid-column-gap: 5vw;
  padding: 0;
  margin-right: 5vmin;

  li {
    list-style-type: none;
  }

  @media (max-width: 1024px) {
    &.nav-items {
      display: flex;
      position: absolute;
      margin: 0;
      padding: 0;
      flex-direction: column;
      width: 100%;
      top: calc(0.5rem + 8vmin);
      left: -100%;
      transition: all 0.5s ease;
    }

    &.nav-items.active {
      background: var(--cream);
      top: calc(0.5rem + 8vmin);
      left: 0;
      opacity: 1;
      transition: all 0.5 ease-in-out;
      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    }
  }

  .nav-links {
    color: var(--grey);
    text-decoration: none;
    transition: all 0.2s ease-out;

    &:hover {
      color: var(--orange);
    }

    @media (max-width: 1024px) {
      width: 100%;
      display: table;
      padding: 3vh 0 3vh 0;

      &:hover {
        background-color: var(--);
        color: var(--grey);
        transition: all 0.2s ease-out;
      }
    }
  }
`;

const NavIconStyled = styled.image`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    margin-right: 5vmin;
    font-size: calc(0.5rem + 2vmin);
    cursor: pointer;

    .fa-icon {
      color: var(--grey);
    }
    .fa-icon:hover {
      color: var(--black);
    }
  }
`;
