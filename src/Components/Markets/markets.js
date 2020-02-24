import React from "react";
import Header from "./Header/Header";
import Body from "./body/body";
import Nav from "../Re-usable/bottom-navs/index";
class Market extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Nav />
      </div>
    );
  }
}

export default Market;
