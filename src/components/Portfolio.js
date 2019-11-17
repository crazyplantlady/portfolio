import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import PrismicReact from "prismic-reactjs";

const Portfolio = ({ prismic }) => {
  const [portfolio, setPortfolio] = useState();
  useEffect(() => {
    if (!prismic) return;
    const portfolioPred = Prismic.Predicates.at("document.type", "portfolio");
    prismic.query(portfolioPred).then(response => {
      console.log(response.results);
      setPortfolio(response.results[0]);
    });
  }, [prismic]);
  console.log(portfolio);

  return (
    <div>
      {portfolio && (
        <div>
          <nav className="portfolio">
            {/* {PrismicReact.RichText.asText(header.data.logo)} */}
            <p>Hér kemur portfolio mappa</p>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
