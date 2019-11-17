import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import PrismicReact from "prismic-reactjs";

const Footer = ({ prismic }) => {
  const [footer, setFooter] = useState();
  useEffect(() => {
    if (!prismic) return;
    const footerPred = Prismic.Predicates.at("document.type", "footer");
    prismic.query(footerPred).then(response => {
      console.log(response.results);
      setFooter(response.results[0]);
    });
  }, [prismic]);
  console.log(footer);
  return (
    <div>
      {footer && (
        <div>
          <nav className="footer">
            {PrismicReact.RichText.render(footer.data.linkedin)}
            {PrismicReact.RichText.render(footer.data.facebook)}
            {PrismicReact.RichText.render(footer.data.email)}
            {PrismicReact.RichText.render(footer.data.instagram)}
            {PrismicReact.RichText.render(footer.data.dribble)}
          </nav>
        </div>
      )}
    </div>
  );
};
export default Footer;
