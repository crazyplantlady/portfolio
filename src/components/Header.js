import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import PrismicReact from "prismic-reactjs";
import Burger from "./Burger";

const Header = ({ prismic }) => {
  const [header, setHeader] = useState();
  useEffect(() => {
    if (!prismic) return;
    const headerPred = Prismic.Predicates.at("document.type", "header");
    prismic.query(headerPred).then(response => {
      console.log(response.results);
      setHeader(response.results[0]);
    });
  }, [prismic]);
  console.log(header);
  return (
    <div>
      {header && (
        <div>
          <nav className="header">
            {PrismicReact.RichText.asText(header.data.logo)}
            <Burger />
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
