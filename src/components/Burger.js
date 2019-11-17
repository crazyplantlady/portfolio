import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import PrismicReact from "prismic-reactjs";

const Burger = () => {
  return (
    <div className="">
      <div>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="https://aesa.is/working">
                <li>Portfolio</li>
              </a>
              <a href="https://aesa.is/awesome">
                <li>About me</li>
              </a>
              <a href="https://aesa.is/manythings">
                <li>Resume</li>
              </a>
              <a href="https://aesa.is/writing">
                <li>Blog</li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Burger;
