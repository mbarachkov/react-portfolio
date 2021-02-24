import React, { Component } from "react";
import codeB1 from './codeButton.png';
import artB1 from './artButton.png';
import "../../styles/style.css";

class frontHero extends Component {
  render() {
    return (
      <section>
        <div classNmae="container">
          <div className="row homeHero">
            <div className="mx-auto artButton">
              <img src={artB1} alt="Art Button" className="col-lg-12 col-md-6 col-sm-6"></img>
            </div>

            <div className="mx-auto codeButton">
              <img src={codeB1} alt='Code Button' className='col-lg-12 col-md-6 col-sm-6'></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default frontHero;
