import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from "../../data";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      selected: "all",
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    });
  };

  filterCards = () => {
    const selectedTab = this.state.selected;
    if (selectedTab === "all") {
      return this.state.cards;
    } else {
      const newCard = this.state.cards.filter(card =>
        card.tab.includes(selectedTab)
      );
      return newCard;
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs
          tabs={this.state.tabs}
          changeSelected={this.changeSelected}
          selectedTab={this.state.selected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
