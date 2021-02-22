import React, { Component } from "react";
import "../../styles/style.css";

class frontHero extends Component {
  render() {
    return (
      <section>
        <div classNmae="container">
          <div className="row homeHero">
            <div className="mx-auto homeTitle">
              <img src="https://via.placeholder.com/600"></img>
            </div>

            <div className="mx-auto homeBlipOne">
              <img src="https://via.placeholder.com/600"></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default frontHero;
