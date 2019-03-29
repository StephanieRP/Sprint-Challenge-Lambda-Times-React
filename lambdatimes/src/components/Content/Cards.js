import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import * as cardstyle from "../../styles/cardsstyle";
const Cards = props => {
  return (
    <cardstyle.CardsContainer>
      {props.cards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </cardstyle.CardsContainer>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.prototype = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
    })
  )
};
export default Cards;
