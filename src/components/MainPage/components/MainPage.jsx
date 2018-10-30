import React, { Component } from "react";

import { Monster } from "@/components/Monster";
import { Navigation } from "@/components/MainPage";

class MainPage extends Component {
  render() {
    return (
      <main>
        <div className="background-image" />
        <Monster />
        <Navigation />
      </main>
    );
  }
}

export default MainPage;
