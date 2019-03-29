import React from "react";
import PropTypes from "prop-types";
import * as cardstyle from "../../styles/cardsstyle";

const Card = props => {
  return (
    <cardstyle.CardContainer>
      <cardstyle.CardHeadline>{props.card.headline}</cardstyle.CardHeadline>
      <cardstyle.CardAuthor>
        <cardstyle.ImgContainer>
          <img src={props.card.img} alt="author profile" />
        </cardstyle.ImgContainer>
        <span>By {props.card.author}</span>
      </cardstyle.CardAuthor>
    </cardstyle.CardContainer>
  );
};

// Make sure to include PropTypes.

Card.prototype = {
  cards: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
