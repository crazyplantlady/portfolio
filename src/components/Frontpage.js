import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import PrismicReact from "prismic-reactjs";

const Frontpage = ({ prismic }) => {
  const [frontpage, setFrontpage] = useState();
  useEffect(() => {
    if (!prismic) return;
    const frontpagePred = Prismic.Predicates.at("document.type", "frontpage");
    prismic.query(frontpagePred).then(response => {
      console.log(response.results);
      setFrontpage(response.results[0]);
    });
  }, [prismic]);
  console.log(frontpage);
  return (
    <div>
      {frontpage && (
        <div className="container">
          <div className="frontpage-card">
            {/* <div className="frontpage-image"></div> */}
            {PrismicReact.RichText.render(frontpage.data.herotext)}
            {/* {PrismicReact.RichText.render(frontpage.data["frontpage-image"])} */}
            {PrismicReact.RichText.render(frontpage.data.actionbtn)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Frontpage;
